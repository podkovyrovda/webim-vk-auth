import { LOGIN_BUTTON, LOGOUT_BUTTON, classNames as s } from '../keys';

export default class ButtonModel {
  constructor() {
    this._data = [
      {
        type: LOGIN_BUTTON,
        className: s.vkAuthButtonLogin,
        textOnButton: 'Авторизоваться',
      },
      {
        type: LOGOUT_BUTTON,
        className: s.vkAuthButtonLogout,
        textOnButton: 'Выйти',
      }
    ]
  }

  getData(type) {
    let nameButton = '', className = '', textOnButton = '';
    this._data.forEach(function(button) {
      if (button.type === type) {
        nameButton = button.type;  
        className = button.className;
        textOnButton = button.textOnButton;
      }
    });
    return { nameButton, className, textOnButton }
  }
}
