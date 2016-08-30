export class ApiService {
    httpService: ng.IHttpService;
    static $inject = ["$http"];
    constructor($http: ng.IHttpService) {
        this.httpService = $http;
    }

    getStatementItems = () => {
        console.log("api - Getting statement items");

        var items = this.get("/getStatementItems");

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
    }

    getCategories = () => {
        console.log("api - Getting statement items");

        var items = this.get("/api/Statement/GetCategories");

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
    }

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
    post = (data, url) => {
        var promise = this.httpService.post(url, data);
        promise.then((result: any) => result.data);
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

    get = (url) => {
        return this.httpService.get(url)
            .then((result: any) => result.data);
    };

    // POST to the server


    // GET to the server
    //var get = function (url, success, error) {
    //    $http({
    //        method: service.methods.get,
    //        url: url
    //    })
    //        .success(function (result) {
    //            processResult(result, success, error);
    //        })
    //        .error(function (ex) {
    //            processException(ex, error);
    //        });
    //}
}
angular.module("accountManager").service("accountManager.Services.ApiService", ApiService);