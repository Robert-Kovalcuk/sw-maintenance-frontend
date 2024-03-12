import Entity from "./entity";
import Relationship from "./relationship";

export default class EntityRelationshipDiagram {
    entities: Entity[];
    relationships: Relationship[];

    constructor(entities: Entity[], relationships: Relationship[]) {
        this.entities = entities;
        this.relationships = relationships;
    }
}
