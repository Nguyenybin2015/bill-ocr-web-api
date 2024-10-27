export enum STATUS {
	NEW = 1,
	COMPLETE = 2,
}
const STATUS_DESCRIPTION: { [key: number]: string } = {
	[STATUS.NEW]: 'New',
	[STATUS.COMPLETE]: 'Hoàn thành',
};

export const MemberProduct = {
	STATUS,
	STATUS_DESCRIPTION,
};
