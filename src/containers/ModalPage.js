import { connect } from "react-redux";
import ModalPage from "../pages/ModalPage/ModalPage";
import { modalIsOpen } from "../redux/actions/modalAction";

const mapDispatchToProps = (dispatch) => ({
	modalaIsOpen: (bool) => dispatch(modalIsOpen(bool)),
});

export default connect(null, mapDispatchToProps)(ModalPage);
