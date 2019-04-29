import VK from 'vkopenapi';

export default class FriendsListModel {
    get() {
        return new Promise((resolve, reject) => {
            VK.api("friends.get", {
                "order": "random",
                "count": 5,
                "fields": "photo_50",
                "v": "5.73"
            }, function (data) {
                if (data) {
                    resolve(data.response.items)
                } else {
                    reject()
                }
            });
        });
    }
}



