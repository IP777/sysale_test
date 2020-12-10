import { connect } from "react-redux";
import HomePage from "../pages/HomePage/HomePage";
import { modalIsOpen, selectedProduct } from "../redux/actions/modalAction";

const mapStateToProps = (state) => ({
	productData: state.fetchData,
});

const mapDispatchToProps = (dispatch) => ({
	modalIsOpen: (bool) => dispatch(modalIsOpen(bool)),
	selectedProduct: (data) => dispatch(selectedProduct(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
