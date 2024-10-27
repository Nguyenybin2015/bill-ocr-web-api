export enum TYPE {
	ADDITION = 1,
	SUBTRACTION = -1,
}
const TYPE_DESCRIPTION: { [key: number]: string } = {
	[TYPE.ADDITION]: 'Cộng',
	[TYPE.SUBTRACTION]: 'Trừ',
};

export const OvocoinTransaction = {
	TYPE,
	TYPE_DESCRIPTION,
};
