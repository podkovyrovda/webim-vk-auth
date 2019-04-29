import VK from 'vkopenapi';

export default class VkAuthModel {
    init(obj) {
        return VK.init(obj)
    }

    getLoginStatus() {
        return new Promise((resolve, reject) =>
            VK.Auth.getLoginStatus(res => res.status ? resolve(res) : reject()))
    }

    login() {
        return new Promise((resolve, reject) =>
            VK.Auth.login(res => res.status ? resolve(res) : reject())
        );
    }

    logout() {
        return new Promise((resolve, reject) =>
            VK.Auth.logout(res => res.status ? resolve(res) : reject())
        );
    }
}
