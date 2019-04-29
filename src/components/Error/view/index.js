import { createElement } from '../../../utils/helpers';
import '../style.css';

export default class ErrorView {
    create(data) {
        return createElement('div',
            {className: data.className}, data.errorText);
    }
}