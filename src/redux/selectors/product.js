export const selected = (state) => {
	return state.fetchData.find((prod) => {
		if (prod.select) {
			return prod;
		}
	});
};
