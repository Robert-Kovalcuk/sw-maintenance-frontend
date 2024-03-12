

export class ErdMapperService {
	public mapToEntityRelationshipDiagram(data: string): EntityRelationshipDiagram {
		const object = JSON.parse(data);
		try {
			// Normalize entities to always be an array
			const entitiesArray = Array.isArray(object.erd.entities.entity)
				? object.erd.entities.entity
				: [object.erd.entities.entity];
			const entities = entitiesArray.map((entity: any) => {
				// Normalize attributes to always be an array
				const attributesArray = Array.isArray(entity.attributes.attribute)
					? entity.attributes.attribute
					: [entity.attributes.attribute];
				return new Entity(
					entity.name,
					attributesArray.map((attribute: any) => new Attribute(attribute.name, attribute.type))
				);
			});

			// Check if relationships exist and normalize them to always be an array if they do
			const relationshipsArray = object.erd.relationships && Array.isArray(object.erd.relationships.relationship)
				? object.erd.relationships.relationship
				: object.erd.relationships ? [object.erd.relationships.relationship] : [];
			const relationships = relationshipsArray.map((relationship: any) => new Relationship(
				relationship.from,
				relationship.to,
				relationship.type
			));

			return new EntityRelationshipDiagram(entities, relationships);
		} catch (e) {
			console.error('Error mapping entity relationship diagram:', e);
			throw new Error('Error mapping entity relationship diagram: ' + e.message);
		}
	}
}
