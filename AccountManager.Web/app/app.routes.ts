/// <reference path="../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../scripts/typings/angularjs/angular-route.d.ts" />
module AccountManager {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/home",
                {
                    controller: "accountManager.controllers.homeController",
                    templateUrl: "/app/views/homeView.html",
                    controllerAs: "home"
                })
                .when("/categorize",
                {
                    controller: "accountManager.controllers.categorizeController",
                    templateUrl: "/app/views/categorizeView.html",
                    controllerAs: "cat"
                })
                .when("/temp",
                {
                    controller: "tempController",
                    templateUrl: "/app/views/tempView.html",
                    controllerAs: "temp"
                })
            .otherwise({ redirectTo: "/home" });
        }
    }
}