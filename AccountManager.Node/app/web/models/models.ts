/// <reference path="../../../Scripts/typings/underscore/underscore.d.ts" />
/// <reference path="../../../../AccountManager.Web/app/interfaces/statementInterfaces.ts" />
import domain = require('../../domain/models');

export class AccountManagerModel {
    categories: domain.Category[];
    statementItems: domain.StatementItem[];
    uncategorizedStatementItems = () => {
        var unCat = _.all(this.statementItems, (statementItem) => {
            return statementItem.category != null;
        });

        console.log("UnCat");
        console.log(unCat);

        return unCat;
    };
}

angular.module("accountManager").service("accountManager.Models.accountManagerModel", AccountManagerModel);