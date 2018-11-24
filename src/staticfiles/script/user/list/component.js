angular
    .module("userList")
    .component("userList", {
        templateUrl: "/static/script/user/list/template.html",
        controller: function (userDataStore) {
            const self = this;
            this.users = userDataStore.getUsers()
            this.sortby = "name";
            this.sorted = false;

            this.getSortOrder = function (sortby) {
                if(sortby == self.sortby){
                    if(self.sorted) return "(ASC)"
                }
                return "(DESC)"
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
