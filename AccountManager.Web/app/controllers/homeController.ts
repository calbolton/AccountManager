/// <reference path="../services/statementService.ts" />
/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
module AccountManager.Controllers {
    import IStatementItem = Interfaces.IStatementItem;

    export class HomeController {
        
        statementService: Interfaces.IStatementService;
        static $inject = ["accountManager.Services.StatementService"];
        constructor(statementService: Interfaces.IStatementService) {

            this.statementService = statementService;
            this.statementItems = [];
            this.getStatementItems();
            this.dateFrom = new Date(2016, 2, 1);
            this.dateTo = new Date(2016, 2, 30);
        }

        statementItems: Array<Interfaces.IStatementItem>;

        categorySummary: Interfaces.ICategorySummary;

        dateFrom: Date;

        dateTo: Date;

        

        //generateCategorySummary = () => {
        //    var filtered = _.filter(this.statementItems, statementItem => {
        //        var dte = new Date(statementItem.dateTime.toString());

        //        var ret = dte.getTime() > this.dateFrom.getTime() && dte.getTime() < this.dateTo.getTime();
                
        //        return ret;
        //    });

        //    this.categorySummary = new Models.CategorySummary(this.dateFrom, this.dateTo);


        //    _.each(filtered, statementItem => {
        //        this.categorySummary.addStatementItem(statementItem);
        //    });
        //}
        
        getStatementItems = () => {

            this.statementService.getStatementItems()
                .then(result => {
                    console.log("CONTROLLER - result");
                    console.log(result);
                    this.statementItems = result.data.statementItems;
                    console.log(this.statementItems);
                });

            //this.statementItems = this.statementService.getStatementItems();
            //console.log(this.statementItems);
        }
    }

    angular.module("accountManager").controller("accountManager.controllers.homeController", HomeController);
} 