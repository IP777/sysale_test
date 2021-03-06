import React, { useState } from "react";
import style from "./ModalPage.module.css";

import NSbutton from "../../component/NSbutton/NSbutton";
import CheckboxBlock from "../../component/CheckboxBlock/CheckboxBlock";
import Select from "../../component/Select/Select";
import SwitchBtnContainer from "../../containers/Switch";
import Counter from "../../component/Counter/Counter";

const ModalPage = ({
	modalaIsOpen,
	product,
	addComparisonProduct,
	removeComparisonProduct,
}) => {
	const price = product.price;
	const [count, setCount] = useState(1);
	const [calc, calcCount] = useState(product.price);
	const [vol, volCount] = useState(100);

	const increment = () => {
		addComparisonProduct(product.id);
		const newCount = count + 1;
		calcCount(newCount * price);
		setCount(newCount);
	};

	const decriment = () => {
		removeComparisonProduct(product.id);
		if (count > 1) {
			const newCount = count - 1;
			calcCount(newCount * price);
			setCount(newCount);
		}
	};

	const volumePrice = (getVolume) => {
		volCount(getVolume);
		calcCount((getVolume / 100) * count * price);
	};

	const isOpen = (e) => {
		if (e.target.className.includes("background")) {
			modalaIsOpen(false);
		}
	};

	return (
		<div className={style.background} onClick={isOpen}>
			<div className={style.wrapper}>
				<div className={style.headCard}>
					<div className={product.new ? style.nsBtn : style.nsBtnNot}>
						NEW
					</div>

					<img
						src={
							"https://raw.githubusercontent.com/IP777/sysale_test/master/src/assets" +
							product.imageSrc
						}
						alt="product"
						className={style.headcard_product}
					/>
					<SwitchBtnContainer />
				</div>
				<span className={style.cardText}>
					<h3>{product.title}</h3>
					<p>{product.text}</p>
				</span>
				<div className={style.centralBlock}>
					<Select />
					<span className={style.cost}>{calc} грн</span>
				</div>
				<CheckboxBlock volumePrice={volumePrice} />
				<div className={style.footer}>
					<Counter
						count={count}
						increment={increment}
						decriment={decriment}
					/>
					<NSbutton
						name="Купить"
						fontSize="18px"
						widthIn="302px"
						heightIn="40px"
					/>
				</div>
			</div>
		</div>
	);
};

export default ModalPage;
