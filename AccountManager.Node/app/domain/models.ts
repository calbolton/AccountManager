export class StatementItem {
    constructor(
        public description: string,
        public balance: number,
        public amount: number,
        public dateTime: Date,
        public category: Category) {
    }
}

export class Category {
    constructor(
        public id: number,
        public name: string) {
    }
}
