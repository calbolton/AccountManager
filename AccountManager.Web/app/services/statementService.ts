/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../models/models.ts" />
module AccountManager.Services {

    export class StatementService implements Interfaces.IStatementService {
        apiService: ApiService;
        accountManagerModel: Models.AccountManagerModel;

        static $inject = ["accountManager.Services.ApiService", "accountManager.Models.accountManagerModel"];
        constructor(apiService: ApiService, accountManagerModel: Models.AccountManagerModel) {
            this.apiService = apiService;
            this.accountManagerModel = accountManagerModel;
        }

        getStatementItems = () => {
            
            var result = this.apiService.getStatementItems();

            result.then(apiResult => {
                this.accountManagerModel.statementItems = apiResult.data.statementItems;
            });
            
            return result;
        }

        getCategories(): angular.IPromise<Interfaces.IServiceResult> {
            var result = this.apiService.getCategories();

            result.then(apiResult => {
                this.accountManagerModel.categories = apiResult.data.categories;
            });

            return result;
        }
    }
    angular.module("accountManager").service("accountManager.Services.StatementService", StatementService);
} 