import { createElement } from '../../../utils/helpers';
import '../style.css';

export default class ButtonView {
  create(data) {
    return createElement('button', {className: data.className}, data.textOnButton);
  }
}
