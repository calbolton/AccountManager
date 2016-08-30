/// <reference path="../interfaces/statementInterfaces.ts" />
var AccountManager;
(function (AccountManager) {
    var Services;
    (function (Services) {
        var ApiService = (function () {
            function ApiService($http) {
                var _this = this;
                this.getStatementItems = function () {
                    console.log("api - Getting statement items");
                    var items = _this.get("/api/Statement/GetStatementItems");
                    //items.then(serviceResult => {
                    //    console.log(serviceResult);
                    //    return <Interfaces.IStatementItem[]>serviceResult.data;
                    //    })
                    //    .catch(reason => {
                    //        console.log(reason);
                    //        throw {};
                    //    });
                    return items;
                    //var res: Array<Interfaces.IStatementItem> = [
                    //{
                    //        amount: 1,
                    //        balance: 1,
                    //        dateTime: "some date",
                    //        description: "desc"
                    //}];
                    //return res;
                };
                this.getCategories = function () {
                    console.log("api - Getting statement items");
                    var items = _this.get("/api/Statement/GetCategories");
                    //items.then(serviceResult => {
                    //    console.log(serviceResult);
                    //    return <Interfaces.IStatementItem[]>serviceResult.data;
                    //    })
                    //    .catch(reason => {
                    //        console.log(reason);
                    //        throw {};
                    //    });
                    return items;
                    //var res: Array<Interfaces.IStatementItem> = [
                    //{
                    //        amount: 1,
                    //        balance: 1,
                    //        dateTime: "some date",
                    //        description: "desc"
                    //}];
                    //return res;
                };
                //processResult = (result: AccountManager.Interfaces.IServiceResult) => {
                //    console.log("result");
                //    console.log(result);
                //    if (!result) {
                //        processException('Invalid result returned from server', error);
                //        return;
                //    }
                //    //for (var VAR in ARRAY) {
                //    //}
                //    //// Add any warnings to model
                //    //if (result.warnings && result.warnings.length > 0) {
                //    //    _.each(result.warnings, function (warning) {
                //    //        //notificationService.addWarning(warning);
                //    //    });
                //    //}
                //    //// Add any errors to model
                //    //if (result.errors && result.errors.length > 0) {
                //    //    _.each(result.errors, function (error) {
                //    //        //notificationService.addError(error);
                //    //    });
                //    //}
                //    if (!result.isSuccess) {
                //        error(result.errors, result.warnings);
                //        return;
                //    }
                //    if (success) {
                //        success(result.data, result.warnings);
                //    }
                //}
                // POST to the server
                this.post = function (data, url) {
                    var promise = _this.httpService.post(url, data);
                    promise.then(function (result) { return result.data; });
                };
                //this.httpService({
                //    method: "POST",
                //    url: url,
                //    data: data
                //})
                //    .success(function (result) {
                //        processResult(result, success, error);
                //    })
                //    .error(function (ex) {
                //        processException(ex, error);
                //    });
                this.get = function (url) {
                    return _this.httpService.get(url)
                        .then(function (result) { return result.data; });
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