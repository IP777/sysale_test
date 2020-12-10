import React, { Component } from "react";
import style from "./CheckboxBlock.module.css";

export default class CheckboxBlock extends Component {
	state = {
		checkbox: [
			{ name: 1, text: "100грн", checked: true },
			{ name: 2, text: "200грн", checked: false },
			{ name: 3, text: "300грн", checked: false },
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
	};

	render() {
		const { checkbox } = this.state;
		return (
			<div className={style.wrapper}>
				<ul className={style.chbxList}>
					{checkbox.map(({ name, checked, text }) => (
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
							<span className={style.chbxText}>{text}</span>
						</li>
					))}
				</ul>
			</div>
		);
	}
}
