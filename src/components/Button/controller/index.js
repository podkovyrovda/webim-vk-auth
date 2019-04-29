export default class ButtonController {
  constructor (model, view) {
    this._model = model;
    this._view = view;
  }

  render(type) {
    const data = this._model.getData(type);
    return this._view.create(data)
  }
}
