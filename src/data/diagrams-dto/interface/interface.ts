import Method from "./method";

export default class Interface {
    name: string;
    methods: Method[];

    constructor(name: string, methods: Method[]) {
        this.name = name;
        this.methods = methods;
    }
}
