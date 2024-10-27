export enum STATUS {
	INACTIVE = -1,
	ACTIVE = 1,
}

const STATUS_DESCRIPTION = {
	[STATUS.INACTIVE]: 'Chờ hoạt động',
	[STATUS.ACTIVE]: 'Đang hoạt động',
};

export enum TYPE {
	DEFAULT = 1,
	CARD = 2,
	VOUCHER = 3,
}

export const TYPE_DESCRIPTION = {
	[TYPE.DEFAULT]: 'Mặc định',
	[TYPE.CARD]: 'Thẻ cào',
	[TYPE.VOUCHER]: 'Voucher',
};

export const StoreProduct = {
	STATUS: STATUS,
	STATUS_DESCRIPTION: STATUS_DESCRIPTION,
	TYPE: TYPE,
	TYPE_DESCRIPTION: TYPE_DESCRIPTION,
};
