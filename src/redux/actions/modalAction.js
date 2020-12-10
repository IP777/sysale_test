export const Type = {
	MODAL_IS_OPEN: "MODAL_IS_OPEN",
	FAKE_FETCH_DATA: "FAKE_FETCH_DATA",
};

export const modalIsOpen = (bool) => ({
	type: Type.MODAL_IS_OPEN,
	payload: bool,
});

export const fetchProductAction = (data) => ({
	type: Type.FAKE_FETCH_DATA,
	payload: { data },
});
