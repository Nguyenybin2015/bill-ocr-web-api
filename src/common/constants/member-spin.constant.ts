export enum STATUS {
	UNUSED = -1,
	USED = 1,
}
const STATUS_DESCRIPTION: { [key: number]: string } = {
	[STATUS.UNUSED]: 'Chưa sử dụng',
	[STATUS.USED]: 'Đã sử dụng',
};

export const MemberSpin = {
	STATUS,
	STATUS_DESCRIPTION,
};
