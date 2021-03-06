import { connect } from "react-redux";
import ModalPage from "../pages/ModalPage/ModalPage";
import {
	modalIsOpen,
	addComparisonProduct,
	removeComparisonProduct,
} from "../redux/actions/modalAction";

const mapStateToProps = (state) => ({
	product: state.selected,
});

const mapDispatchToProps = (dispatch) => ({
	modalaIsOpen: (bool) => dispatch(modalIsOpen(bool)),
	addComparisonProduct: (id) => dispatch(addComparisonProduct(id)),
	removeComparisonProduct: (id) => dispatch(removeComparisonProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
