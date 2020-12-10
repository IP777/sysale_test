import data from "../../db/fakeData.json";
import { fetchProductAction } from "../actions/modalAction";

export const fetchProduct = () => (dispatch) => {
	dispatch(fetchProductAction(data));
};
