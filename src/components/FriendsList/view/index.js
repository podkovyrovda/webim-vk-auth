import { appendChildren, createElement } from '../../../utils/helpers';
import { classNames as s } from '../keys';
import '../style.css';
import Error from "../../Error";

export default class FriendsListView {
    create(users) {
        const friendsList = FriendsListView.createFriendsList();
        users.forEach(user => {
            const item = FriendsListView.createItem(user);
            appendChildren(friendsList, item);
        });
        return friendsList;
    }

    static createFriendsList() {
        const title = createElement('div', {className: s.friendsListTitle}, 'Друзья');
        return createElement('div', {className: s.friendsList}, title);
    }

    static createItem(user) {
        const image = createElement('img', {className: s.friendsImage, src: user.photo_50});
        return createElement('div',
            {className: s.friendsListItem}, image, `${user.first_name}`);
    }

    createError(type) {
        return Error.render(type)
    }
}
