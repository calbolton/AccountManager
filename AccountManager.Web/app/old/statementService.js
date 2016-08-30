/// <reference path="../interfaces/statementInterfaces.ts" />
var AccountManager;
(function (AccountManager) {
    var Services;
    (function (Services) {
        var StatementService = (function () {
            function StatementService(apiService) {
                var _this = this;
                this.getStatementItems = function () {
                    return _this.apiService.getStatementItems();
                };
                this.apiService = apiService;
            }
            StatementService.$inject = ["apiService"];
            return StatementService;
        }());
        Services.StatementService = StatementService;
        angular.module("accountManager").service("accountManager.Services.StatementService", StatementService);
    })(Services = AccountManager.Services || (AccountManager.Services = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=statementService.js.map