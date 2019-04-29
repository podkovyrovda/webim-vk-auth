import { ErrorEmitter } from "../../../utils/helpers";

export default class VkAuthController extends ErrorEmitter{
    constructor(model, view) {
        super();
        this._model = model;
        this._view = view;

        this._view.on('login', this.login.bind(this));
        this._view.on('logout', this.logout.bind(this));

        this._loginStatus = '';

        this.allAttemptsLimit = 3;
        this.onerror = this.error.bind(this);
        this.onTryRestore('start', this.start.bind(this));
        this.onTryRestore('login', this.login.bind(this));
        this.onTryRestore('logout', this.logout.bind(this), 1);
    }

    init(apiId, elId) {
        this._model.init({ apiId: apiId, status: false, onlyWidgets: false });
        this._view.mainDiv = elId;
        this.start()
    }

    start() {
        this._model.getLoginStatus()
            .then(res => this._view.render(res.status))
            .catch(() => this.tryRestore('start'))
    }

    login() {
        this._model.login()
            .then((res) => this._loginStatus = res.status)
            .then(() => this._view.showUser())
            .then(() => this._view.toggleButton(this._loginStatus))
            .then(() => this._view.showFriends())
            .catch(() => this.tryRestore('login'))
    }

    logout() {
        this._model.logout()
            .then(res => {
                this._view.toggleButton(res.status);
                this._view.clear();
            })
            .catch(() => this.tryRestore('logout'));
    }

    error(type) {
        this._view.showError(type);
    }
}
