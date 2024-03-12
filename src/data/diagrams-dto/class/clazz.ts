import Attribute from "./attribute"
import Method from "./method"

export default class Clazz {
    name: string;
    attributes: Attribute[];
    methods: Method[];

    constructor(name: string, attributes: Attribute[], methods: Method[]) {
        this.name = name;
        this.attributes = attributes;
        this.methods = methods;
    }
}