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
		default:
			return state;
	}
};

const fetchAccess = (state = false, { type, payload }) => {
	switch (type) {
		case Type.ACCESS_TO_DB:
			return true;
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
	fetchData: fetchData,
	fetchAccess,
	selected,
});
