import { connect } from "react-redux";
import App from "../App";
import * as productOperation from "../redux/operations/productOperations";

const mapStateToProps = (state) => ({
	modalIsOpenBool: state.modalIsOpen,
});

const mapDispatchToProps = {
	fetchProduct: productOperation.fetchProduct,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
