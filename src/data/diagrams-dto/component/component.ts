import {Port} from "./port"
import {Dependency} from "./dependency"
import {Interface} from "./interface"

export class Component {
	constructor(
		public name: string,
		public ports: Port[] = [],
		public interfaces: Interface[] = [],
		public dependencies: Dependency[] = []
	) {}
}