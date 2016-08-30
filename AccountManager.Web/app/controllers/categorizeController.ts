/// <reference path="../services/statementService.ts" />
/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../../scripts/typings/underscore/underscore.d.ts" />
/// <reference path="../../scripts/typings/angularjs/angular.d.ts" />
/// <reference path="../../scripts/typings/jquery/jquery.d.ts" />
module AccountManager.Controllers {
    export class CategorizeController {
        
        static $inject = ["accountManager.Services.StatementService", "accountManager.Models.accountManagerModel"]; 
        constructor(statementService: Interfaces.IStatementService, accountManagerModel: Models.AccountManagerModel) {
            this.statementService = statementService;
            this.accountManagerModel = accountManagerModel;
            this.init();
        }

        init = () => {

            this.statementService.getStatementItems()
                .then(result => {
                    this.setNextUncategorized();
                });

            this.statementService.getCategories().then(result => {
                this.categories = result.data.categories as Interfaces.ICategory[];
            });
        }

        // ---------------------------------------------------------

        categories: Interfaces.ICategory[];
        statementService: Interfaces.IStatementService;
        accountManagerModel: Models.AccountManagerModel;
        currentUncategorized: Interfaces.IStatementItem;

        updateCategory = () => {
            var selectedCategoryId = this.selectedCategory.value as Number;

            var category = _.find(this.categories, (category: Interfaces.ICategory) => {
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
                    _.each(this.categories, (category: Interfaces.ICategory) => {
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