import { combineReducers } from "redux";
import { Type } from "../actions/modalAction";

const modalReducer = (state = false, action) => {
	switch (action.type) {
		case Type.MODAL_IS_OPEN:
			return action.payload;
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

export const rootReducer = combineReducers({
	modalIsOpen: modalReducer,
	fetchData: fetchData,
});
