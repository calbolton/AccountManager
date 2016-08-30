/// <reference path="../models/models.ts" />
import domain = require('../../domain/models');
import models = require('../models/models')
import api = require('../services/apiService')

export class StatementService {
    accountManagerModel: models.AccountManagerModel;
    private apiService: api.ApiService
    static $inject = ["accountManager.Services.ApiService", "accountManager.Models.accountManagerModel"];
    constructor(apiService: api.ApiService, accountManagerModel: models.AccountManagerModel) {
        this.apiService = apiService;
        this.accountManagerModel = accountManagerModel;
    }

    getStatementItems = () => {

        var result = this.apiService.getStatementItems();

        result.then(apiResult => {
            console.log("apiResult");
            console.log(apiResult.statementItems);
            this.accountManagerModel.statementItems = apiResult.statementItems;
        });

        return result;
    }

    getCategories(): angular.IPromise<domain.Category[]> {
        var result = this.apiService.getCategories();

        result.then(apiResult => {

            this.accountManagerModel.categories = apiResult.data.categories;
        });

        return result;
    }
}
angular.module("accountManager").service("accountManager.Services.StatementService", StatementService);