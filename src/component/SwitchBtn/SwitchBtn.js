import React, { useState } from "react";
import style from "./SwitchBtn.module.css";

const SwitchBtn = () => {
	const [state, setState] = useState({ switch: true });

	const switchBtn = () => {
		setState({ switch: !state.switch });
	};
	return (
		<button
			className={state.switch ? style.saleBtn : style.saleBtnClick}
			onClick={switchBtn}
		/>
	);
};

export default SwitchBtn;
