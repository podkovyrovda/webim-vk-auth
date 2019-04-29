export default class FriendsListController {
    constructor(model, view) {
        this._model = model;
        this._view = view;
    }

    render() {
        return this._model.get()
            .then(res => this._view.create(res))
            .catch(() => this.error('showFriends'))
    }

    error(type) {
        return this._view.createError(type);
    }
}