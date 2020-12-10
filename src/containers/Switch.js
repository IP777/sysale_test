import { connect } from "react-redux";
import SwitchBtn from "../component/SwitchBtn/SwitchBtn";
import {
	addComparisonProduct,
	removeComparisonProduct,
} from "../redux/actions/modalAction";

const mapStateToProps = (state) => ({
	product: state.selected,
});

const mapDispatchToProps = (dispatch) => ({
	addComparisonProduct: (id) => dispatch(addComparisonProduct(id)),
	removeComparisonProduct: (id) => dispatch(removeComparisonProduct(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(SwitchBtn);
