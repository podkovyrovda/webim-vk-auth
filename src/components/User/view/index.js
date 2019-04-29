import {appendChildren, createElement} from '../../../utils/helpers';
import '../style.css';
import { classNames as s } from '../keys';
import Error from "../../Error";

export default class UserView {
    create(user) {
        const image = createElement('img', {className: s.userImage, src: user.photo});
        return createElement('div',
            {className: s.user}, image, `${user.name}`);
    }

    createError(type) {
        return Error.render(type)
    }
}