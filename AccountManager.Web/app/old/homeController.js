/// <reference path="../services/statementService.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
var AccountManager;
(function (AccountManager) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(statementService) {
                var _this = this;
                this.getStatementItems = function () {
                    _this.statementItems = _this.statementService.getStatementItems();
                };
                this.statementService = statementService;
            }
            HomeController.$inject = ["accountManager.Services.StatementService"];
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module("accountManager").controller("accountManager.controllers.homeController", HomeController);
    })(Controllers = AccountManager.Controllers || (AccountManager.Controllers = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=homeController.js.map