/// <reference path="../../../Scripts/typings/angular/angular.d.ts" />
import models = require('../models/models');
import statementService = require('../services/statementService');
import domain = require('../../domain/models');
module AccountManager.Controllers {

    export class HomeController {
        
        statementService: statementService.StatementService;
        static $inject = ["accountManager.Services.StatementService"];
        constructor(statementService: statementService.StatementService) {

            this.statementService = statementService;
            this.statementItems = [];
            this.getStatementItems();
            this.dateFrom = new Date(2016, 2, 1);
            this.dateTo = new Date(2016, 2, 30);
        }

        statementItems: Array<domain.StatementItem>;

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
                    this.statementItems = result;
                    console.log(this.statementItems);
                });

            //this.statementItems = this.statementService.getStatementItems();
            //console.log(this.statementItems);
        }
    }

    angular.module("accountManager").controller("accountManager.controllers.homeController", HomeController);
} 