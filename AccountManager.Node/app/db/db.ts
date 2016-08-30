    import mongodb = require('mongodb');
    import domain = require('../domain/models');

    export class AccountManagerDb {
        private server: mongodb.Server;
        private db: mongodb.Db;
        constructor(host: string, port: number, databaseName: string) {
            this.server = new mongodb.Server(host, port);
            this.db = new mongodb.Db(databaseName, this.server, { w: 1 });
            this.db.open(() => { });

            this.statementRepository = new StatementRepository(this.db);
        }

        statementRepository: IStatementRepository;

    }

    export class StatementRepository implements IStatementRepository {
        private db: mongodb.Db;
        constructor(db: mongodb.Db) {
            this.db = db;
        }

        insertStatementItem = (statementItem: domain.StatementItem) => {
            this.db.collection('statementItems', (error, statementItems) => {
                if (error) {
                    console.error(error);
                    return;
                }

                statementItems.insert(statementItem, (insertError, insertedItem) => {
                    if (insertError) {
                        return;
                    }
                });
            });
        }
        getStatementItems = (callback: (statementItems: domain.StatementItem[]) => void) => {
            this.db.collection('statementItems', (error, statementCollection) => {
                if (error) {
                    console.error(error);
                    return;
                }

                statementCollection.find().toArray((error, images) => {
                    callback(images);
                });
            });
        };

        getCategories = (callback: (statementItems: domain.Category[]) => void) => {
            this.db.collection('categories', (error, categoryCollection) => {
                if (error) {
                    console.error(error);
                    return;
                }

                categoryCollection.find().toArray((error, categories) => {
                    callback(categories);
                });
            });
        };
    }

    export interface IStatementRepository {
        insertStatementItem: (statementItem: domain.StatementItem) => void;
        getStatementItems: (callback: (statementItems: domain.StatementItem[]) => void) => void;
        getCategories: (callback: (categories: domain.Category[]) => void) => void;
    }