import React from "react";
import style from "./Select.module.css";

const SelectC = () => (
	<>
		<div className={style.defaultSelect} />
		<select defaultValue="цвет" className={style.wrapper}>
			<option value="цвет" selected disabled hidden>
				Цвет
			</option>
			<option value="yellow" className={style.option}>
				Желтый
			</option>
			<option value="red">Красный</option>
			<option value="green">Зеленый</option>
		</select>
	</>
);

export default SelectC;
