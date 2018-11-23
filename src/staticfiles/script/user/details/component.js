
angular
    .module("userDetails")
    .component("userDetails", {
        templateUrl: "/static/script/user/details/template.html",
        controller: function ($routeParams, userDataStore) {
            const userID = $routeParams.userID;

            this.updateUser = userDataStore.updateUser
            this.user = userDataStore.getUser(userID)
            if(this.user == undefined){
                userDataStore.loadUser(this, userID)
            }
        }
    })
