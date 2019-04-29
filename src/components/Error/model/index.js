import { START, LOGIN, LOGOUT, SHOW_USER, SHOW_FRIENDS, classNames as s } from '../keys';

export default class ErrorModel {
    constructor() {
        this._data = [
            {
                type: START,
                className: s.error,
                errorText: 'Ошибка инициализации',
            },
            {
                type: LOGIN,
                className: s.error,
                errorText: 'Ошибка авторизации',
            },
            {
                type: LOGOUT,
                className: s.error,
                errorText: 'Ошибка выхода',
            },
            {
                type: SHOW_USER,
                className: s.error,
                errorText: 'Ошибка получения данных пользователя',
            },
            {
                type: SHOW_FRIENDS,
                className: s.error,
                errorText: 'Ошибка получения данных друзей пользователя',
            },
        ]
    }

    getData(type) {
        let className = '', errorText = '';
        this._data.forEach(function(error) {
            if (error.type === type) {
                className = error.className;
                errorText = error.errorText;
            }
        });
        return { className, errorText }
    }
}
