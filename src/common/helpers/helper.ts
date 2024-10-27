/**
 * Helper to produce an array of enum descriptors.
 * @param enumeration Enumeration object.
 * @param separatorRegex Regex that would catch the separator in your enum key.
 */
export function enumToDescriptionArray<T>(enumeration: T): string {
	return JSON.stringify(enumeration, null, '\t');
}

export function convertArrayToObject<T>(
	array: T[],
	keyFields: (keyof T)[],
): { [key: string]: T } {
	return array.reduce((obj, item) => {
		const key = keyFields.map(field => String(item[field])).join('-');
		obj[key] = item;
		return obj;
	}, {} as { [key: string]: T });
}
