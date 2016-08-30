/// <reference path="../services/statementService.ts" />
/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../../../Scripts/typings/angular/angular.d.ts" />
var AccountManager;
(function (AccountManager) {
    var Controllers;
    (function (Controllers) {
        var HomeController = (function () {
            function HomeController(statementService) {
                var _this = this;
                //generateCategorySummary = () => {
                //    var filtered = _.filter(this.statementItems, statementItem => {
                //        var dte = new Date(statementItem.dateTime.toString());
                //        var ret = dte.getTime() > this.dateFrom.getTime() && dte.getTime() < this.dateTo.getTime();
                //        return ret;
                //    });
                //    this.categorySummary = new Models.CategorySummary(this.dateFrom, this.dateTo);
                //    _.each(filtered, statementItem => {
                //        this.categorySummary.addStatementItem(statementItem);
                //    });
                //}
                this.getStatementItems = function () {
                    _this.statementService.getStatementItems()
                        .then(function (result) {
                        console.log("CONTROLLER - result");
                        console.log(result);
                        _this.statementItems = result.data.statementItems;
                        console.log(_this.statementItems);
                    });
                    //this.statementItems = this.statementService.getStatementItems();
                    //console.log(this.statementItems);
                };
                this.statementService = statementService;
                this.statementItems = [];
                this.getStatementItems();
                this.dateFrom = new Date(2016, 2, 1);
                this.dateTo = new Date(2016, 2, 30);
            }
            HomeController.$inject = ["accountManager.Services.StatementService"];
            return HomeController;
        }());
        Controllers.HomeController = HomeController;
        angular.module("accountManager").controller("accountManager.controllers.homeController", HomeController);
    })(Controllers = AccountManager.Controllers || (AccountManager.Controllers = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=homeController.js.map