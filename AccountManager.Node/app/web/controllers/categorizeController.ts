/// <reference path="../services/statementService.ts" />
/// <reference path="../services/statementService.ts" />
/// <reference path="../../../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../Scripts/typings/underscore/underscore.d.ts" />

import models = require('../models/models');
import statementService = require('../services/statementService');
import domain = require('../../domain/models');

module AccountManager.Controllers {
    
    export class CategorizeController {
        
        static $inject = ["accountManager.Services.StatementService", "accountManager.Models.accountManagerModel"]; 
        constructor(statementService: statementService.StatementService, accountManagerModel: models.AccountManagerModel) {
            this.statementService = statementService;
            this.accountManagerModel = accountManagerModel;
            this.init();
        }

        init = () => {

            this.statementService.getStatementItems()
                .then(result => {
                    this.setNextUncategorized();
                    console.log(this.accountManagerModel.statementItems);
                });

            //this.statementService.getCategories().then(result => {
            //    this.categories = result.data.categories as Interfaces.ICategory[];
            //});
        }

        // ---------------------------------------------------------

        categories: domain.Category[];
        statementService: statementService.StatementService;
        accountManagerModel: models.AccountManagerModel;
        currentUncategorized: domain.StatementItem;

        updateCategory = () => {
            var selectedCategoryId = this.selectedCategory.value as Number;

            var category = _.find(this.categories, (category: domain.Category) => {
                return category.id === selectedCategoryId;
            });

            if (category) {
                this.currentUncategorized.category = category;
                this.setNextUncategorized();
            }
        };

        setNextUncategorized = () => {
            this.currentUncategorized = _.find(this.accountManagerModel.statementItems, (statementItem) => {
                return statementItem.category == null;
            });
        };
        
        

        selectedCategory = {
            id: '',
            name: '',
            value: 0
        };

        

        // --------------------------------------------------------

        myOption = {
            options: {
                html: false,
                focusOpen: true,
                onlySelectValid: true,
                source: (request, response) => {
                    var items = [];
                    _.each(this.categories, (category: domain.Category) => {
                        items.push({
                            label: category.name,
                            value: category.id
                        });
                    });
                    response(items);
                }
            },
            methods: {},
            events: {
                change: (event, ui) => {
                    event.preventDefault();
                    
                },
                close: function (event, ui) {
                    // do something
                },
                //...other event handlers
            }
        };
    }

    angular.module("accountManager").controller("accountManager.controllers.categorizeController", CategorizeController);
} 