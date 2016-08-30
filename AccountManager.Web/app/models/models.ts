/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />
module AccountManager.Models {
    export class CategorySummary implements Interfaces.ICategorySummary {
        constructor(dateFrom: Date, dateTo: Date) {
            this.dateFrom = dateFrom;
            this.dateTo = dateTo;
            this.summaryItems = [];
        }
        dateFrom: Date;
        dateTo: Date;
        summaryItems: Interfaces.ICategorySummaryItem[];

        addStatementItem = (statementItem: Interfaces.IStatementItem) => {
            console.log("adding statement item");

            var existingSummaryItem = _.find(this.summaryItems, summaryItem => {
                return summaryItem.category.name === statementItem.category.name;
            });

            if (existingSummaryItem) {
                existingSummaryItem.addStatementItem(statementItem);
                return;
            }

            var newCategorySummaryItem = new CategorySummaryItem(statementItem.category);
            newCategorySummaryItem.addStatementItem(statementItem);
            this.summaryItems.push(newCategorySummaryItem);
        }

    }

    export class CategorySummaryItem implements Interfaces.ICategorySummaryItem {
        constructor(category: Interfaces.ICategory) {
            this.amount = 0;
            this.description = category.name;
            this.category = category;
            this.statementItems = [];
        }
        amount: number;
        description: string;
        category: Interfaces.ICategory;
        statementItems: Interfaces.IStatementItem[];

        addStatementItem(statementItem: Interfaces.IStatementItem): void {
            this.statementItems.push(statementItem);
            this.amount += statementItem.amount;
        }
    }

    export class AccountManagerModel {
        categories: Interfaces.ICategory[];
        statementItems: Interfaces.IStatementItem[];
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
}