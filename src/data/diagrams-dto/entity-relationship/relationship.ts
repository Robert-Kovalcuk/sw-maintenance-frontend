export default class Relationship {
    from: string;
    to: string;
    type: string; // For example, 'one-to-many', 'many-to-one', etc.

    constructor(from: string, to: string, type: string) {
        this.from = from;
        this.to = to;
        this.type = type;
    }
}
