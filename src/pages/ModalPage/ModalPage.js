//import React, { useState } from "react";
import style from "./ModalPage.module.css";

import NSbutton from "../../component/NSbutton/NSbutton";
import CheckboxBlock from "../../component/CheckboxBlock/CheckboxBlock";
import Select from "../../component/Select/Select";
import SwitchBtn from "../../component/SwitchBtn/SwitchBtn";
import Counter from "../../component/Counter/Counter";

const ModalPage = ({ modalaIsOpen }) => {
	const isOpen = (e) => {
		if (e.target.className.includes("background")) {
			modalaIsOpen(false);
		}
	};

	return (
		<div className={style.background} onClick={isOpen}>
			<div className={style.wrapper}>
				<div className={style.headCard}>
					<NSbutton
						name="NEW"
						fontSize="14px"
						widthIn="71px"
						heightIn="26px"
					/>
					<img
						src="/images/image 22.jpg"
						alt="product"
						className={style.headcard_product}
					/>
					<SwitchBtn />
				</div>
				<span className={style.cardText}>
					<h3>Шампунь</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco.
					</p>
				</span>
				<div className={style.centralBlock}>
					<Select />
					<span className={style.cost}>200 грн</span>
				</div>
				<CheckboxBlock />
				<div className={style.footer}>
					<Counter />
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
