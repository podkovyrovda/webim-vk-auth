import FriendsListModel from './model';
import FriendsListView from './view';
import FriendsListController from './controller';

const model = new FriendsListModel();
const view = new FriendsListView();

export default new FriendsListController(model, view);
