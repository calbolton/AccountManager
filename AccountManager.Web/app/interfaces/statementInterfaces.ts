module AccountManager.Interfaces {

    // Services
    export interface IStatementService {
        getStatementItems: () => ng.IPromise<IServiceResult>;
        getCategories: () => ng.IPromise<IServiceResult>;
    }

    export interface IApiService extends IStatementService {
    }

    // Models
    export interface IStatementItem {
        description: string;
        balance: number;
        amount: number;
        dateTime: Date;
        category: ICategory;
    }

    export interface ICategory {
        id: number;
        name: string;
    }

    export interface ICategorySummaryItem {
        amount: number;
        description: string;
        category: ICategory;
        statementItems: Array<IStatementItem>;
        addStatementItem(statementItem: IStatementItem): void;
    }

    export interface ICategorySummary {
        dateFrom: Date;
        dateTo: Date;
        summaryItems: Array<ICategorySummaryItem>;
        addStatementItem(statementItem: IStatementItem): void;
    }

    export interface IError {
        message: string;
        description: string;
    }

    export interface IWarning {
        message: string;
        description: string;
    }

    export interface IServiceResult {
        warnings: Array<IWarning>;
        errors: Array<IError>;
        isSuccess: boolean;
        data: any;
    }
}