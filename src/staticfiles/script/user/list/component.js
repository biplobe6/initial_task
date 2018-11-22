angular
    .module("userList")
    .component("userList", {
        templateUrl: "/static/script/user/list/template.html",
        controller: function () {
            this.users = [
                {
                    id: 1,
                    name: "Saddam"
                }, {
                    id: 2,
                    name: "Arif"
                }, {
                    id: 3,
                    name: "Kamal"
                }, {
                    id: 4,
                    name: "Khaled"
                }, {
                    id: 5,
                    name: "Shorif"
                }, {
                    id: 6,
                    name: "Faruk"
                }
            ]
        }
    })