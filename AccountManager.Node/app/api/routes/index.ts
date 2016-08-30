import express = require('express');
import database = require('../../db/db');
import domain = require('../../domain/models');
let db = new database.AccountManagerDb("localhost", 27017, 'AccountManager');


/*
 * GET home page.
 */

export function index(req: express.Request, res: express.Response) {
    res.render('index', { title: 'Express', year: new Date().getFullYear() });
};

export function about(req: express.Request, res: express.Response) {
    res.render('about', { title: 'About', year: new Date().getFullYear(), message: 'Your application description page' });
};

export function contact(req: express.Request, res: express.Response) {
    res.render('contact', { title: 'Contact', year: new Date().getFullYear(), message: 'Your contact page' });
};

export function insertStatementItem(req: express.Request, res: express.Response) {
    //var newItem = new StatementItem("TestDesc", 12345, 123, new Date(), new Category(1, "TEST"));
    console.log(req.body);
    //db.insertStatementItem(newItem);
    res.render("MyTest");
}

export function getStatementItems(req: express.Request, res: express.Response) {
    db.statementRepository.getStatementItems((statementItems: domain.StatementItem[]) => {
        console.log('statementItems');
        console.log(statementItems);
        res.json({ statementItems: statementItems });
    });
}
