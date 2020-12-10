import { connect } from "react-redux";
import App from "../App";

const mapStateToProps = (state) => ({
	modalIsOpenBool: state.modalIsOpen,
});

export default connect(mapStateToProps)(App);
