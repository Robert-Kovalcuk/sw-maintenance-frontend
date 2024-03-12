import Clazz from "./clazz"

export default class ClassDiagram {
    classes: Clazz[];

    constructor(classes: Clazz[]) {
        this.classes = classes;
    }
}