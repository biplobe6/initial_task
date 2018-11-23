
angular
    .module("userApp")
    .config(['$routeProvider', function config($routeProvider) {
        $routeProvider
            .when("/", {
                template:
                    '<user-add></user-add>' + 
                    '<hr>' + 
                    '<user-list></user-list>'
            })
            .when("/user/:userID", {
                template: "<user-details></user-details>"
            })
            .otherwise("/")
    }])
    .config(['$locationProvider', function config($locationProvider) {
        $locationProvider.html5Mode(true);
    }])
