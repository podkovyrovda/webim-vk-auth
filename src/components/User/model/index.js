import VK from 'vkopenapi';

export default class UserModel {
    get() {
        return new Promise((resolve, reject) => {
            VK.api("users.get", {
                "fields": "photo_50",
                "v": "5.73"
            }, function (data) {
                if (data) {
                    const user = data.response[0];
                    resolve({
                        name: user.first_name + ' ' + user.last_name,
                        photo: user.photo_50
                    })
                } else {
                    reject()
                }
            });
        });
    }
}



