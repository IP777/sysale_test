import React from "react";
import style from "./HomePage.module.css";

export default function HomePage({ modalaIsOpen, fetchProduct }) {
	const swither = () => {
		modalaIsOpen(true);
		fetchProduct();
		console.log(fetchProduct());
	};
	return (
		<div className="wrapper">
			<ul className={style.list}>
				<li className={style.item} onClick={swither}>
					<img
						src="/images/image 22.jpg"
						alt="product"
						className={style.wrapper}
					/>
				</li>
			</ul>
		</div>
	);
}
