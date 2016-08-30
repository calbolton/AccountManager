"use strict";
var mongodb = require('mongodb');
var server = new mongodb.Server('localhost', 27017);
var db = new mongodb.Db('accountManager', server, { w: 1 });
db.open(function () { });
var AccountManager;
(function (AccountManager) {
    var Db;
    (function (Db) {
        var AccountManagerDb = (function () {
            function AccountManagerDb(host, port, databaseName) {
                this.server = new mongodb.Server(host, port);
                this.db = new mongodb.Db(databaseName, this.server, { w: 1 });
                db.open(function () { });
            }
            return AccountManagerDb;
        }());
        Db.AccountManagerDb = AccountManagerDb;
        function insertStatementItem(statementItem) {
            db.collection('statementItems', function (error, statementItems) {
                if (error) {
                    console.error(error);
                    return;
                }
                statementItems.insert(statementItem, function (insertError, insertedItem) {
                    if (insertError) {
                        console.error(insertError);
                        return;
                    }
                    console.log(insertedItem);
                });
            });
        }
        Db.insertStatementItem = insertStatementItem;
    })(Db = AccountManager.Db || (AccountManager.Db = {}));
})(AccountManager || (AccountManager = {}));
//# sourceMappingURL=db.js.map