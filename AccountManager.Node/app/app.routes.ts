/// <reference path="../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../Scripts/typings/angular/angular-route.d.ts" />
module AccountManager {
    export class Routes {
        static $inject = ["$routeProvider"];
        static configureRoutes($routeProvider: ng.route.IRouteProvider) {
            $routeProvider
                .when("/home",
                {
                    controller: "accountManager.controllers.homeController",
                    templateUrl: "/template/home.jade",
                    controllerAs: "home"
                })
                .when("/categorize",
                {
                    controller: "accountManager.controllers.categorizeController",
                    templateUrl: "/template/categorizeStatementItems.jade",
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