export const Type = {
	MODAL_IS_OPEN: "MODAL_IS_OPEN",
	FAKE_FETCH_DATA: "FAKE_FETCH_DATA",
	SELECT_PRODUCT: "SELECT_PRODUCT",
	ADD_COMPARISON_PRODUCT: "ADD_COMPARISON_PRODUCT",
	REMOVE_COMPARISON_PRODUCT: "REMOVE_COMPARISON_PRODUCT",
};

export const modalIsOpen = (bool) => ({
	type: Type.MODAL_IS_OPEN,
	payload: { bool },
});

export const fetchProductAction = (data) => ({
	type: Type.FAKE_FETCH_DATA,
	payload: { data },
});

export const selectedProduct = (data) => ({
	type: Type.SELECT_PRODUCT,
	payload: { data },
});

export const addComparisonProduct = (id) => ({
	type: Type.ADD_COMPARISON_PRODUCT,
	payload: { id },
});
export const removeComparisonProduct = (id) => ({
	type: Type.REMOVE_COMPARISON_PRODUCT,
	payload: { id },
});
