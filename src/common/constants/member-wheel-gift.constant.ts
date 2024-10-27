export enum STATUS {
	NEW = 1,
	COMPLETE = 2,
	CANCEL = -1,
}
const STATUS_DESCRIPTION: { [key: number]: string } = {
	[STATUS.NEW]: 'New',
	[STATUS.COMPLETE]: 'Hoàn thành',
};

export const MemberWheelGift = {
	STATUS,
	STATUS_DESCRIPTION,
};
