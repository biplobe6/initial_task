
angular
    .module("userData")
    .factory("userDataStore", function ($http) {
        const store = {};
        const contactUrl = "/api/v1/contact";
        store.users = []

        store.loadUsers = function () {
            $http
                .get("/api/v1/contact/all")
                .then(response => {
                    response.data.forEach(user => {
                        store.users.push(user)
                    });
                })
        }

        store.loadUser = function (placeHolder, userID) {
            $http
                .get(contactUrl + "/" + userID)
                .then(response => {
                    placeHolder.user = response.data;
                })
        }
        
        store.addUser = function (name) {
            $http
                .post(contactUrl, {
                    name: name
                })
                .then(function(response){
                    if(response.status == 201){
                        store.users.push({
                            id: response.data.id,
                            name: response.data.name
                        });
                    }
                })
        }
        
        store.updateUser = function (userID, userName) {
            for (let i = 0; i < store.users.length; i++) {
                const user = store.users[i];
                if (user.id == userID){
                    $http
                        .patch(contactUrl + "/" + userID, {
                            name: userName
                        })
                        .then(function (response) {
                            if (response.status = 200){
                                user.name = response.data.name
                                alert("Name Updated.");
                            }
                        })
                }
            }
        }

        store.getUsers = function () {
            return store.users;
        }

        store.getUser = function (userID) {
            for (let i = 0; i < store.users.length; i++) {
                const user = store.users[i];
                if(user.id == userID) return user;
            }
        }

        store.loadUsers();
        return store;
    })

