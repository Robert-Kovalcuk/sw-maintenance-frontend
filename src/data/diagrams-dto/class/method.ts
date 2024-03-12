import Parameter from "./parameter"
import {Visibility} from "./visibility"

export default class Method {
    name: string;
    returnType: string;
    parameters: Parameter[];
    visibility: Visibility;

    constructor(name: string, returnType: string, parameters: Parameter[], visibility: Visibility) {
        this.name = name;
        this.returnType = returnType;
        this.parameters = parameters;
        this.visibility = visibility;
    }
}