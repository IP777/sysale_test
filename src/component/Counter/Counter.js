import React, { Component } from "react";
import style from "./Counter.module.css";

export default class Counter extends Component {
	state = {
		count: 0,
	};
	increment = () => {
		this.setState({ count: this.state.count + 1 });
	};
	decriment = () => {
		const count = this.state.count;
		if (count > 0) {
			this.setState({ count: count - 1 });
		}
	};

	render() {
		const { count } = this.state;
		return (
			<div className={style.wrapper}>
				<button className={style.btn} onClick={this.decriment}>
					-
				</button>
				<span className={style.count}>{count}</span>
				<button className={style.btn} onClick={this.increment}>
					+
				</button>
			</div>
		);
	}
}
