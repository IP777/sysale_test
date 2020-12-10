import { connect } from "react-redux";
import ModalPage from "../pages/ModalPage/ModalPage";
import { modalIsOpen } from "../redux/actions/modalAction";

const mapStateToProps = (state) => ({
	product: state.selected,
});

const mapDispatchToProps = (dispatch) => ({
	modalaIsOpen: (bool) => dispatch(modalIsOpen(bool)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalPage);
