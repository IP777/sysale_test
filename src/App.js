import React, { useEffect } from "react";
import HomePageContainer from "./containers/HomePage";
import ModalPageContainer from "./containers/ModalPage";
import "./App.css";

export default function App({ modalIsOpenBool, fetchProduct }) {
	useEffect(() => {
		fetchProduct();
	}, [fetchProduct]);

	return (
		<>
			{modalIsOpenBool && <ModalPageContainer />}
			<HomePageContainer />
		</>
	);
}
