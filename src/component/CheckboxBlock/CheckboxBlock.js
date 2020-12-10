import React, { Component } from "react";
import style from "./CheckboxBlock.module.css";

export default class CheckboxBlock extends Component {
	state = {
		checkbox: [
			{ name: 1, price: 100, checked: true },
			{ name: 2, price: 200, checked: false },
			{ name: 3, price: 300, checked: false },
		],
		btnChecked: "",
	};

	handleChange = (e) => {
		const targetName = e.target.attributes.name.value;
		const cloneArr = Object.assign([], this.state.checkbox);
		cloneArr.map((i) => {
			if (i.name.toString() === targetName) {
				i.checked = true;
			} else {
				i.checked = false;
			}
		});
		this.setState({ checkbox: [...cloneArr], btnChecked: targetName });

		const findPrice = cloneArr.find((item) => {
			if (item.name.toString() === targetName) {
				return item.price;
			}
		});
		this.props.volumePrice(findPrice.price);
	};

	render() {
		const { checkbox } = this.state;
		return (
			<div className={style.wrapper}>
				<ul className={style.chbxList}>
					{checkbox.map(({ name, checked, price }) => (
						<li key={name} className={style.chbxItem}>
							<div
								name={name}
								className={
									checked
										? style.checkboxChecked
										: style.checkbox
								}
								checked={checked}
								onClick={this.handleChange}
							/>
							<span className={style.chbxText}>{price} мл</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
