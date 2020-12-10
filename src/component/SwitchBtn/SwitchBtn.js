import React, { useState } from "react";
import style from "./SwitchBtn.module.css";

const SwitchBtn = ({
	product,
	addComparisonProduct,
	removeComparisonProduct,
}) => {
	const [state, setState] = useState({ switch: true });

	const switchBtn = () => {
		setState({ switch: !state.switch });
		if (state.switch) {
			addComparisonProduct(product.id);
		} else {
			removeComparisonProduct(product.id);
		}
	};
	return (
		<button
			className={state.switch ? style.saleBtn : style.saleBtnClick}
			onClick={switchBtn}
		/>
	);
};

export default SwitchBtn;
