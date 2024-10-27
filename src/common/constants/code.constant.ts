export enum STATUS {
	UNUSED = -1,
	USED = 1,
}
const STATUS_DESCRIPTION: { [key: number]: string } = {
	[STATUS.UNUSED]: 'Chưa sử dụng',
	[STATUS.USED]: 'Đã sử dụng',
};
export enum TYPE {
	LV1 = 1,
	LV2 = 2,
}
const TYPE_DESCRIPTION: { [key: number]: string } = {
	[TYPE.LV1]: 'Loại 110ml',
	[TYPE.LV2]: 'Loại 180ml',
};

export const Code = {
	STATUS,
	STATUS_DESCRIPTION,
	TYPE,
	TYPE_DESCRIPTION,
};
