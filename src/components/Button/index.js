import ButtonModel from './model';
import ButtonView from './view';
import ButtonController from './controller';

const model = new ButtonModel();
const view = new ButtonView();

export default new ButtonController(model, view);
