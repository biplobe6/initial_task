angular
    .module("userList")
    .component("userList", {
        templateUrl: "/static/script/user/list/template.html",
        controller: function (userDataStore) {
            var self = this;
            this.users = userDataStore.getUsers()
            this.sorted = false;
            self.sortedClass = "btn btn-default"

            self.toggleSort = function () {
                self.sorted = !self.sorted;
                self.sortedClass = self.sorted ? "btn btn-default active" : "btn btn-default"
            }
        }
    })
