import { combineReducers } from "redux";
import { Type } from "../actions/modalAction";

const modalReducer = (state = false, { type, payload }) => {
	switch (type) {
		case Type.MODAL_IS_OPEN:
			return payload.bool;
		default:
			return state;
	}
};

const fetchData = (state = [], { type, payload }) => {
	switch (type) {
		case Type.FAKE_FETCH_DATA:
			return payload.data;
		case Type.ADD_COMPARISON_PRODUCT:
			return state.map((product) => {
				if (product.id === payload.id) {
					return { ...product, comparison: true };
				}
				return product;
			});
		case Type.REMOVE_COMPARISON_PRODUCT:
			return state.map((product) => {
				if (product.id === payload.id) {
					return { ...product, comparison: false };
				}
				return product;
			});
		default:
			return state;
	}
};

const selected = (state = {}, { type, payload }) => {
	switch (type) {
		case Type.SELECT_PRODUCT:
			return payload.data;
		default:
			return state;
	}
};

export const rootReducer = combineReducers({
	modalIsOpen: modalReducer,
	fetchData,
	selected,
});
