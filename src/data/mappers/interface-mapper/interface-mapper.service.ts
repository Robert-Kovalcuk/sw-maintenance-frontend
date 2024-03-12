
export class InterfaceMapperService {
	public mapToInterfaceDiagram(data: string): InterfaceDiagram {
		const parsedData = JSON.parse(data)

		const interfaces = Array.isArray(parsedData.interfaceDiagram.interfaces.interface)
			? parsedData.interfaceDiagram.interfaces.interface
			: [parsedData.interfaceDiagram.interfaces.interface]; // Normalize interfaces to an array

		const mappedInterfaces = interfaces.map((intf: any) => {
			const methods = Array.isArray(intf.methods.method)
				? intf.methods.method
				: [intf.methods.method]; // Normalize methods to an array

			const mappedMethods = methods.map((method: any) => {
				const parameters = method.parameters && method.parameters.parameter
					? (Array.isArray(method.parameters.parameter)
						? method.parameters.parameter
						: [method.parameters.parameter]) // Normalize parameters to an array
					: []; // Handle no parameters

				const mappedParameters = parameters.map((parameter: any) => new Parameter(parameter.name, parameter.type));

				// Correctly include handling for returnType
				return new Method(method.name, mappedParameters, method.returnType);
			});

			return new Interface(intf.name, mappedMethods);
		});

		return new InterfaceDiagram(mappedInterfaces);
	}
}
