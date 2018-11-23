
angular
    .module("userAdd")
    .component("userAdd", {
        templateUrl: "/static/script/user/add/template.html",
        controller: function (userDataStore) {
            this.addUser = function (input) {
                if (input == undefined){
                    return alert("Username can't be empty")
                }
                userDataStore.addUser(input);
                return false
            }
        }
    })
