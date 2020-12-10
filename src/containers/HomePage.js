import { connect } from "react-redux";
import HomePage from "../pages/HomePage/HomePage";
import { modalIsOpen } from "../redux/actions/modalAction";
import { fetchProduct } from "../redux/operations/productOperations";

const mapDispatchToProps = (dispatch) => ({
	modalaIsOpen: (bool) => dispatch(modalIsOpen(bool)),
	fetchProduct,
});

export default connect(null, mapDispatchToProps)(HomePage);
