import UserModel from './model';
import UserView from './view';
import UserController from './controller';

const model = new UserModel();
const view = new UserView();

export default new UserController(model, view);
