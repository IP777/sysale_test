import React, { Component } from "react";
import HomePageContainer from "./containers/HomePage";
import ModalPageContainer from "./containers/ModalPage";
import "./App.css";

export default function App({ modalIsOpenBool }) {
	return (
		<>
			{modalIsOpenBool && <ModalPageContainer />}
			<HomePageContainer />
		</>
	);
}
