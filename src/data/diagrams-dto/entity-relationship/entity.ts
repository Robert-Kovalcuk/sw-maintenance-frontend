import Attribute from "./attribute";

export default class Entity {
    name: string;
    attributes: Attribute[];

    constructor(name: string, attributes: Attribute[]) {
        this.name = name;
        this.attributes = attributes;
    }
}
