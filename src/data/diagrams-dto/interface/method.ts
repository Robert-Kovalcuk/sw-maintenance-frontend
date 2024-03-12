import Parameter from "./parameter"

export default class Method {
    name: string;
    returnType: string;
    parameters: Parameter[];

    constructor(name: string, returnType: string, parameters: Parameter[]) {
        this.name = name;
        this.returnType = returnType;
        this.parameters = parameters;
    }
}