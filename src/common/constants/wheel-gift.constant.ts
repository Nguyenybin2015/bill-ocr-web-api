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
	VOUCHER = 2,
	CARD = 3,
	NO_GIFT = 4,
}

export enum LEVEL {
	LOW = 1,
	MIDDLE = 2,
	HIGH = 3,
}

export const TYPE_DESCRIPTION = {
	[TYPE.DEFAULT]: 'Mặc định',
};

export const WheelGift = {
	STATUS: STATUS,
	STATUS_DESCRIPTION: STATUS_DESCRIPTION,
	TYPE: TYPE,
	TYPE_DESCRIPTION: TYPE_DESCRIPTION,
	LEVEL,
};
