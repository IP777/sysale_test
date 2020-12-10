import React from "react";
import style from "./HomePage.module.css";

export default function HomePage({
	modalaIsOpen,
	productData,
	selectedProduct,
}) {
	const swither = (e) => {
		const targetId = e.target.attributes.value.value;
		modalaIsOpen(true);
		const product = productData.find((item) => item.id == targetId);
		selectedProduct(product);
	};
	return (
		<div className="wrapper">
			<ul className={style.list}>
				{productData.map((item) => (
					<li key={item.id} className={style.item} onClick={swither}>
						<img
							value={item.id}
							src={item.imageSrc}
							alt="product"
							className={style.wrapper}
						/>
					</li>
				))}
			</ul>
		</div>
	);
}
