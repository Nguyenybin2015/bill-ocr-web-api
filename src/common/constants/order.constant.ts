export enum STATUS {
	STATUS_NEW = 1, // mới hoặc chờ duyệt
	STATUS_CONFIRM = 2, // xác nhận hợp lệ
	STATUS_CANCELLED_CONFIRM = -2, // xác nhận không hợp lệ
	STATUS_PREPARING_GOODS = 3, // Đang soạn hàng hóa
	STATUS_READY_TO_DELIVER = 4, // Đã soạn hàng xong, chuẩn bị giao hàng
	STATUS_DELIVERIRNG = 5, // Đang giao hàng
	STATUS_CANCELLED_DELIVER = -5, // Hủy giao hàng
	STATUS_COMPLETED = 6, // Hoàn thành
}

export const Order = {
	STATUS: STATUS,
};
