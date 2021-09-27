import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import "./App.css";

function App() {
	// eslint-disable-next-line
	const [textColor, setTextColor] = useState("#003300");
	// eslint-disable-next-line
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	// eslint-disable-next-line
	const [headerText, setHeaderText] = useState("No green score");
	const [menuValue, setMenuValue] = useState(0);

	const handleMenuChange = (event, newValue) => {
		setMenuValue(newValue);
	};

	return (
		<div className="app">
			<Header textColor={textColor} backgroundColor={backgroundColor} headerText={headerText} />
			<Main
				textColor={textColor}
				backgroundColor={backgroundColor}
				menuValue={menuValue}
				handleChange={handleMenuChange}
			/>
			<Footer textColor={textColor} backgroundColor={backgroundColor} />
		</div>
	);
}

export default App;
