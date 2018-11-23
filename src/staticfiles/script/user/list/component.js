angular
    .module("userList")
    .component("userList", {
        templateUrl: "/static/script/user/list/template.html",
        controller: function (userDataStore) {
            this.users = userDataStore.getUsers()
        }
    })
