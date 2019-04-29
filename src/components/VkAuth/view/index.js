import Button from '../../Button';
import * as buttonTypes from '../../Button/keys';

import User from '../../User';
import FriendsList from '../../FriendsList';
import Error from '../../Error';

import { appendChildren, EventEmitter, removeChildren } from '../../../utils/helpers';

import '../style.css';
import { classNames as s } from '../keys';

export default class VkAuthView extends EventEmitter {
	get mainDiv() {
		return this._mainDiv;
	}

	set mainDiv(id) {
		const div = document.querySelector('#' + id);
		div.classList.add(s.vkAuth);
		this._mainDiv = div;
	}
    constructor() {
        super();

        this._mainDiv = {};
        this.button = {};
        this.user = {};
        this.friendsList = {};

        this.error = undefined;
    }

    render(status) {
        if (status === 'connected') {
            this.showUser()
                .then(() => this.showButton(status))
                .then(() => this.showFriends());
        } else {
            this.showButton();
        }
    }

    showUser() {
        return User.render()
            .then(user => appendChildren(this.mainDiv, this.user = user))
    }

    showFriends() {
        return FriendsList.render()
            .then(friendsList => appendChildren(this.mainDiv, this.friendsList = friendsList))
    }

    showButton(status) {
        if (status === 'connected') {
            this.button = Button.render(buttonTypes.LOGOUT_BUTTON);
            this.button .addEventListener('click', () => this.emit('logout'));
        } else {
            this.button = Button.render(buttonTypes.LOGIN_BUTTON);
            this.button .addEventListener('click', () => this.emit('login'));
        }
        appendChildren(this.mainDiv, this.button)
    }

    removeButton() {
        removeChildren(this.mainDiv, this.button);
    }

    toggleButton(status) {
        this.removeButton();
        this.showButton(status);
    }

    clear() {
        removeChildren(this.mainDiv, this.user, this.friendsList);
    }

    showError(type) {
        const div = this.mainDiv;
        !this.error ? appendChildren(div, this.error = Error.render(type)) : null;
    }
}
