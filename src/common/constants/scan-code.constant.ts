export enum STATUS {
	VALID = 1,
	INVALID = -1,
}
const STATUS_DESCRIPTION: { [key: number]: string } = {
	[STATUS.VALID]: 'Mã nhập đúng',
	[STATUS.INVALID]: 'Mã nhập sai',
};
export enum LOCK_TYPE {
	CONSECUTIVE = 1,
	NON_CONSECUTIVE = 2,
}

export const ScanCode = {
	STATUS: STATUS,
	STATUS_DESCRIPTION,
	LOCK_TYPE,
};
