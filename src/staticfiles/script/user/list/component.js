angular
    .module("userList")
    .component("userList", {
        templateUrl: "/static/script/user/list/template.html",
        controller: function (userDataStore) {
            var self = this;
            this.users = userDataStore.getUsers()
            this.sortby = "name";
            this.sorted = false;

            this.getClass = function (name) {
                if(name == self.sortby && self.sorted){
                    return "btn btn-default active"
                }
                return "btn btn-default"
            }

            self.toggleSort = function (sortby) {
                if(sortby == self.sortby){
                    self.sorted = !self.sorted;
                } else {
                    self.sortby = sortby;
                    self.sorted = true;
                }
            }
        }
    })
