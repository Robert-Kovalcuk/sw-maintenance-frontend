
@Injectable()
export class ComponentMapperService {
	public mapToComponentDiagram(data: string): ComponentDiagram {
		const parsedData = JSON.parse(data);

		const components = Array.isArray(parsedData.componentDiagram.components.component)
			? parsedData.componentDiagram.components.component
			: [parsedData.componentDiagram.components.component]; // Normalize to array

		const mappedComponents = components.map((comp: any) => {
			// Normalizing ports
			const ports = comp.ports && comp.ports.port
				? (Array.isArray(comp.ports.port) ? comp.ports.port : [comp.ports.port]).map((p: any) => new Port(p.name, p.interfaceName))
				: [];

			// Normalizing interfaces
			const interfaces = comp.interfaces && comp.interfaces.interface
				? (Array.isArray(comp.interfaces.interface) ? comp.interfaces.interface : [comp.interfaces.interface]).map((i: any) => new Interface(i.name))
				: [];

			// Normalizing dependencies - Enhanced to prevent 'undefined' error
			const dependencies = comp.dependencies && comp.dependencies.dependency
				? (Array.isArray(comp.dependencies.dependency) ? comp.dependencies.dependency : [comp.dependencies.dependency]).map((d: any) => new Dependency(d.name, d.targetComponentName))
				: [];

			return new Component(comp.name, ports, interfaces, dependencies);
		});

		return new ComponentDiagram(mappedComponents);
	}
}
