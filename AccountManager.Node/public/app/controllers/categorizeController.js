/// <reference path="../services/statementService.ts" />
/// <reference path="../interfaces/statementInterfaces.ts" />
/// <reference path="../../../Scripts/typings/angular/angular.d.ts" />
/// <reference path="../../../Scripts/typings/jquery/jquery.d.ts" />
/// <reference path="../../../Scripts/typings/underscore/underscore.d.ts" />
var AccountManager;
(function (AccountManager) {
    var Controllers;
    (function (Controllers) {
        var CategorizeController = (function () {
            function CategorizeController(statementService, accountManagerModel) {
                var _this = this;
                this.init = function () {
                    _this.statementService.getStatementItems()
                        .then(function (result) {
                        _this.setNextUncategorized();
                    });
                    _this.statementService.getCategories().then(function (result) {
                        _this.categories = result.data.categories;
                    });
                };
                this.updateCategory = function () {
                    var selectedCategoryId = _this.selectedCategory.value;
                    var category = _.find(_this.categories, function (category) {
                        return category.id === selectedCategoryId;
                    });
                    if (category) {
                        _this.currentUncategorized.category = category;
                        _this.setNextUncategorized();
                    }
                };
                this.setNextUncategorized = function () {
                    _this.currentUncategorized = _.find(_this.accountManagerModel.statementItems, function (statementItem) {
                        return statementItem.category == null;
                    });
                };
                this.selectedCategory = {
                    id: '',
                    name: '',
                    value: 0
                };
                // --------------------------------------------------------
                this.myOption = {
                    options: {
                        html: false,
                        focusOpen: true,
                        onlySelectValid: true,
                        source: function (request, response) {
                            var items = [];
                            _.each(_this.categories, function (category) {
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
                        change: function (event, ui) {
                            event.preventDefault();
                        },
                        close: function (event, ui) {
                            // do something
                        },
                    }
                };
                this.statementService = statementService;
                this.accountManagerModel = accountManagerModel;
                this.init();
            }
            CategorizeController.$inject = ["accountManager.Services.StatementService", "accountManager.Models.accountManagerModel"];
            return CategorizeController;
        }());
        Controllers.CategorizeController = CategorizeController;
        angular.module("accountManager").controller("accountManager.controllers.categorizeController", CategorizeController);
    })(Controllers = AccountManager.Controllers || (AccountManager.Controllers = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=categorizeController.js.map