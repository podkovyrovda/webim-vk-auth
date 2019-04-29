const createElement = (tag, props, ...children) => {
    const element = document.createElement(tag);

    Object.keys(props).forEach(key => element[key] = props[key]);

    children.forEach(child => {
        if (typeof child === 'string') {
            child = document.createTextNode(child);
        }

        element.appendChild(child);
    });

    return element;
};

const appendChildren = (parent, ...children) => {
    children.forEach(child => parent.appendChild(child));
    return parent;
};

const removeChildren = (parent, ...children) => {
    children.forEach(child => parent.removeChild(child));
    return parent;
};

class EventEmitter {
    constructor() {
        this.events = {};
    }

    on(type, listener) {
        this.events[type] = this.events[type] || [];
        this.events[type].push(listener);
    }

    emit(type, arg) {
        if (this.events[type]) {
            this.events[type].forEach(listener => listener(arg));
        }
    }
}

class ErrorEmitter {
    get allAttemptsLimit() {
        return this._allAttemptsLimit;
    }

    set allAttemptsLimit(value) {
        this._allAttemptsLimit = value;
    }

    get onerror() {
        return this._onerror;
    }

    set onerror(func) {
        this._onerror = func;
    }

    constructor() {
        this._attempts = [];
        this._allAttemptsLimit = 0;
        this._onerror = {};
    }

    onTryRestore(type, onrestore, limit, onerror) {
        this._attempts.push({
            type,
            attempts: 0,
            onrestore,
            onerror,
            limit
        });
    }

    tryRestore(type) {
        this._attempts.forEach(el => {
            if (el.type === type) {
                let attempts = el.attempts += 1;
                const limit = el.limit ? el.limit : this.allAttemptsLimit;
                const error = () => el.onerror ? el.onerror(type) : this.onerror(type);
                attempts < limit ? el.onrestore() : error(type);
            }
        })
    }


}

export { createElement, appendChildren, removeChildren, EventEmitter, ErrorEmitter };
