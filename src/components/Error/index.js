import ErrorModel from './model';
import ErrorView from './view';
import ErrorController from './controller';

const model = new ErrorModel();
const view = new ErrorView();

export default new ErrorController(model, view);
