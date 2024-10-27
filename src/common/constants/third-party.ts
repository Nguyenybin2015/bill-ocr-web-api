export enum TYPE {
	GOT_IT = 1,
	TOP_UP = 2,
	TOP_UP_WEB_HOOK = 3,
	TOP_UP_REFRESH_TOKEN = 4,
	SENT_OTP = 5,
}
export enum STATUS {
	SUCCESS = 1,
	ERROR = -1,
}
export const ThirdParty = {
	TYPE: TYPE,
	STATUS: STATUS,
};
