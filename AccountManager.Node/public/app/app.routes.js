/// <reference path="../../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../../Scripts/typings/angular/angular-route.d.ts" />
var AccountManager;
(function (AccountManager) {
    var Routes = (function () {
        function Routes() {
        }
        Routes.configureRoutes = function ($routeProvider) {
            $routeProvider
                .when("/home", {
                controller: "accountManager.controllers.homeController",
                templateUrl: "/app/views/homeView.html",
                controllerAs: "home"
            })
                .when("/categorize", {
                controller: "accountManager.controllers.categorizeController",
                templateUrl: "/app/views/categorizeView.html",
                controllerAs: "cat"
            })
                .when("/temp", {
                controller: "tempController",
                templateUrl: "/app/views/tempView.html",
                controllerAs: "temp"
            })
                .otherwise({ redirectTo: "/home" });
        };
        Routes.$inject = ["$routeProvider"];
        return Routes;
    }());
    AccountManager.Routes = Routes;
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=app.routes.js.map