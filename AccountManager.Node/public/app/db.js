"use strict";
var mongodb = require('mongodb');
var AccountManagerDb = (function () {
    function AccountManagerDb(host, port, databaseName) {
        var _this = this;
        this.insertStatementItem = function (statementItem) {
            _this.db.collection('statementItems', function (error, statementItems) {
                if (error) {
                    console.error(error);
                    return;
                }
                statementItems.insert(statementItem, function (insertError, insertedItem) {
                    if (insertError) {
                        console.error(insertError);
                        return;
                    }
                    console.log('insertedItem');
                    console.log(insertedItem);
                });
            });
        };
        this.getStatementItems = function (callback) {
            _this.db.collection('statementItems', function (error, statementCollection) {
                if (error) {
                    console.error(error);
                    return;
                }
                statementCollection.find().toArray(function (error, images) {
                    callback(images);
                });
            });
        };
        this.server = new mongodb.Server(host, port);
        this.db = new mongodb.Db(databaseName, this.server, { w: 1 });
        this.db.open(function () { });
    }
    return AccountManagerDb;
}());
exports.AccountManagerDb = AccountManagerDb;
var StatementItem = (function () {
    function StatementItem(description, balance, amount, dateTime, category) {
        this.description = description;
        this.balance = balance;
        this.amount = amount;
        this.dateTime = dateTime;
        this.category = category;
    }
    return StatementItem;
}());
exports.StatementItem = StatementItem;
var Category = (function () {
    function Category(id, name) {
        this.id = id;
        this.name = name;
    }
    return Category;
}());
exports.Category = Category;
//# sourceMappingURL=db.js.map