export default class Attribute {
    name: string;
    type: string; // Type might not be necessary for ERD, adjust accordingly

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }
}
