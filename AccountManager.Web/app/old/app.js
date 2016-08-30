(function() {
    "use strict";

    angular.module("statementHelper", ["ngRoute"])
        .config([
            "$routeProvider", function(routeProvider) {
                routeProvider
                    .when("/home",
                    {
                        controller: "homeController",
                        templateUrl: "/app/views/homeView.html"
                    })
                .otherwise("/home");
            }
        ]);


})();