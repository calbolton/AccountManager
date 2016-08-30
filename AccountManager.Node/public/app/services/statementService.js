/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../models/models.ts" />
var AccountManager;
(function (AccountManager) {
    var Services;
    (function (Services) {
        var StatementService = (function () {
            function StatementService(apiService, accountManagerModel) {
                var _this = this;
                this.getStatementItems = function () {
                    var result = _this.apiService.getStatementItems();
                    result.then(function (apiResult) {
                        _this.accountManagerModel.statementItems = apiResult.data.statementItems;
                    });
                    return result;
                };
                this.apiService = apiService;
                this.accountManagerModel = accountManagerModel;
            }
            StatementService.prototype.getCategories = function () {
                var _this = this;
                var result = this.apiService.getCategories();
                result.then(function (apiResult) {
                    _this.accountManagerModel.categories = apiResult.data.categories;
                });
                return result;
            };
            StatementService.$inject = ["accountManager.Services.ApiService", "accountManager.Models.accountManagerModel"];
            return StatementService;
        }());
        Services.StatementService = StatementService;
        angular.module("accountManager").service("accountManager.Services.StatementService", StatementService);
    })(Services = AccountManager.Services || (AccountManager.Services = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=statementService.js.map