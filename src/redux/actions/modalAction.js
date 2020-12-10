export const Type = {
	MODAL_IS_OPEN: "MODAL_IS_OPEN",
	FAKE_FETCH_DATA: "FAKE_FETCH_DATA",
	ACCESS_TO_DB: "ACCESS_TO_DB",
	SELECT_PRODUCT: "SELECT_PRODUCT",
};

export const modalIsOpen = (bool) => ({
	type: Type.MODAL_IS_OPEN,
	payload: { bool },
});

export const fetchProductAction = (data) => ({
	type: Type.FAKE_FETCH_DATA,
	payload: { data },
});

export const accessToDB = () => ({
	type: Type.ACCESS_TO_DB,
});

export const selectedProduct = (data) => ({
	type: Type.SELECT_PRODUCT,
	payload: { data },
});
