import {Visibility} from "./visibility"

export default class Attribute {
    name: string;
    type: string;
    visibility: Visibility;

    constructor(name: string, type: string, visibility: Visibility) {
        this.name = name;
        this.type = type;
        this.visibility = visibility;
    }
}