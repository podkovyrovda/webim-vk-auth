import VkAuthModel from './model';
import VkAuthView from './view';
import VkAuthController from './controller';

export default class VkAuth {
    constructor() {
        this._model = new VkAuthModel();
        this._view = new VkAuthView();
        this.controller = new VkAuthController(this._model, this._view);
    }
}
