export enum MetadataKeys {
	Method = 'method',
	Path = 'path',
	Middleware = 'middleware',
	Validator = 'validator',
}

/**
 * Metadata
 *
 * Proposed feature to be added to JS(TS)
 * Snippets of info that can be tied to a method, property, or class definition
 * Can be used to super custom stuff
 * TS will (optionally) provide type information as metadata
 * Read and write using the `reflect-metadata` package
 */
