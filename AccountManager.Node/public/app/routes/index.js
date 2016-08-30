"use strict";
var db_1 = require('../db');
var db = new db_1.AccountManagerDb("localhost", 27017, 'AccountManager');
function index(req, res) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
}
exports.index = index;
;
function about(req, res) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
}
exports.about = about;
;
function contact(req, res) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
}
exports.contact = contact;
;
function insertStatementItem(req, res) {
    //var newItem = new StatementItem("TestDesc", 12345, 123, new Date(), new Category(1, "TEST"));
    console.log(req.body);
    //db.insertStatementItem(newItem);
    res.render("MyTest");
}
exports.insertStatementItem = insertStatementItem;
function categorizeStatementItems(req, res) {
    db.getStatementItems(function (statementItems) {
        console.log('statementItems');
        console.log(statementItems);
        res.render('categorizeStatementItems', { statementItems: statementItems });
    });
}
exports.categorizeStatementItems = categorizeStatementItems;
//# sourceMappingURL=index.js.map