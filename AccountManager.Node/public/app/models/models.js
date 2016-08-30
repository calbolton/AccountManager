/// <reference path="../../../Scripts/typings/underscore/underscore.d.ts" />
var AccountManager;
(function (AccountManager) {
    var Models;
    (function (Models) {
        var CategorySummary = (function () {
            function CategorySummary(dateFrom, dateTo) {
                var _this = this;
                this.addStatementItem = function (statementItem) {
                    console.log("adding statement item");
                    var existingSummaryItem = _.find(_this.summaryItems, function (summaryItem) {
                        return summaryItem.category.name === statementItem.category.name;
                    });
                    if (existingSummaryItem) {
                        existingSummaryItem.addStatementItem(statementItem);
                        return;
                    }
                    var newCategorySummaryItem = new CategorySummaryItem(statementItem.category);
                    newCategorySummaryItem.addStatementItem(statementItem);
                    _this.summaryItems.push(newCategorySummaryItem);
                };
                this.dateFrom = dateFrom;
                this.dateTo = dateTo;
                this.summaryItems = [];
            }
            return CategorySummary;
        }());
        Models.CategorySummary = CategorySummary;
        var CategorySummaryItem = (function () {
            function CategorySummaryItem(category) {
                this.amount = 0;
                this.description = category.name;
                this.category = category;
                this.statementItems = [];
            }
            CategorySummaryItem.prototype.addStatementItem = function (statementItem) {
                this.statementItems.push(statementItem);
                this.amount += statementItem.amount;
            };
            return CategorySummaryItem;
        }());
        Models.CategorySummaryItem = CategorySummaryItem;
        var AccountManagerModel = (function () {
            function AccountManagerModel() {
                var _this = this;
                this.uncategorizedStatementItems = function () {
                    var unCat = _.all(_this.statementItems, function (statementItem) {
                        return statementItem.category != null;
                    });
                    console.log("UnCat");
                    console.log(unCat);
                    return unCat;
                };
            }
            return AccountManagerModel;
        }());
        Models.AccountManagerModel = AccountManagerModel;
        angular.module("accountManager").service("accountManager.Models.accountManagerModel", AccountManagerModel);
    })(Models = AccountManager.Models || (AccountManager.Models = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=models.js.map