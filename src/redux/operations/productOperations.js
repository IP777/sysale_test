import data from "../../db/fakeData.json";
import { accessToDB, fetchProductAction } from "../actions/modalAction";

export const fetchProduct = () => (dispatch) => {
	dispatch(accessToDB());
	dispatch(fetchProductAction(data));
};
