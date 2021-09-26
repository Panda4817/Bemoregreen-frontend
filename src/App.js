import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import { Typography } from "@mui/material";

import "./App.css";

function App() {
	const [textColor, setTextColor] = useState("#003300");
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [headerText, setHeaderText] = useState("No green score :( Complete the quiz below");
	const [menuValue, setMenuValue] = useState(0);

	const handleChange = (event, newValue) => {
		setMenuValue(newValue);
	};

	return (
		<div className="app">
			<Header textColor={textColor} backgroundColor={backgroundColor} headerText={headerText} />
			<Main
				textColor={textColor}
				backgroundColor={backgroundColor}
				menuValue={menuValue}
				handleChange={handleChange}
			/>
		</div>
	);
}

export default App;
