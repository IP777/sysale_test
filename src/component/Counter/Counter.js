import React, { Component } from "react";
import style from "./Counter.module.css";

export default function Counter({ count, increment, decriment }) {
	return (
		<div className={style.wrapper}>
			<button className={style.btn} onClick={decriment}>
				-
			</button>
			<span className={style.count}>{count}</span>
			<button className={style.btn} onClick={increment}>
				+
			</button>
		</div>
	);
}
