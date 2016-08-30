module Models {
    export class StatementItem {
        description: string;
        balance: number;
        amount: number;
        dateTime: Date;
        category: Category;
    }

    export class Category {
        id: number;
        name: string;
    }
}