/// <reference path="../interfaces/statementInterfaces.ts" />
var AccountManager;
(function (AccountManager) {
    var Services;
    (function (Services) {
        var ApiService = (function () {
            function ApiService($http) {
                this.getStatementItems = function () {
                    //For the purpose of this demo I am returning the hard coded values, hoever in real world application
                    //You would probably use "this.httpService.get" method to call backend REST apis to fetch the data from server.
                    var res = [
                        {
                            amount: 1,
                            balance: 1,
                            dateTime: "some date",
                            description: "desc"
                        }];
                    return res;
                };
                this.httpService = $http;
            }
            ApiService.$inject = ["$http"];
            return ApiService;
        }());
        Services.ApiService = ApiService;
        angular.module("accountManager").service("accountManager.Services.ApiService", ApiService);
    })(Services = AccountManager.Services || (AccountManager.Services = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=apiService.js.map