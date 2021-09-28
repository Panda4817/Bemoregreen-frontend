import React, { useState } from "react";
import Header from "./components/Header/Header";
import Main from "./components/Main/Main";
import Footer from "./components/Footer/Footer";
import ContentContainer from "./components/ContentContainer/ContentContainer";
import Form from "./components/Form/Form";
import { Grid, Typography } from "@mui/material";
import "./App.css";
import ResultContainer from "./components/ResultContainer/ResultContainer";

const server = process.env.REACT_APP_SERVER;
function App() {
	const [textColor, setTextColor] = useState("#003300");
	const [backgroundColor, setBackgroundColor] = useState("#ffffff");
	const [headerText, setHeaderText] = useState("No green score");
	const [resultMsg, setResultMsg] = useState("");
	const [score, setScore] = useState(0);
	const [menuValue, setMenuValue] = useState(0);

	const handleMenuChange = (event, newValue) => {
		setMenuValue(newValue);
	};

	const handleFormSubmission = (answers) => {
		console.log(answers);
		fetch(`${server}/api/score`, {
			method: "POST",
			body: JSON.stringify({ data: answers }),
			headers: {
				"content-type": "application/json",
			},
		})
			.then((response) => response.json())
			.then((data) => {
				setTextColor(data.text);
				setBackgroundColor(data.background);
				setResultMsg(data.msg);
				setScore(data.score);
				setHeaderText(`Your green score: ${data.score}`);
			});
	};

	return (
		<div className="app">
			<Header textColor={textColor} backgroundColor={backgroundColor} headerText={headerText} />
			<Main
				textColor={textColor}
				backgroundColor={backgroundColor}
				menuValue={menuValue}
				handleChange={handleMenuChange}
			>
				<ContentContainer menuValue={menuValue} index={0}>
					<Grid
						container
						sx={{
							justifyContent: "center",
						}}
					>
						<Form
							textColor={textColor}
							backgroundColor={backgroundColor}
							submitForm={handleFormSubmission}
						/>
						<ResultContainer
							textColor={textColor}
							backgroundColor={backgroundColor}
							resultMsg={resultMsg}
							score={score}
						/>
					</Grid>
				</ContentContainer>
				<ContentContainer menuValue={menuValue} index={1}>
					<Typography>Item two</Typography>
				</ContentContainer>
				<ContentContainer menuValue={menuValue} index={2}>
					<Typography>Item three</Typography>
				</ContentContainer>
			</Main>
			<Footer textColor={textColor} backgroundColor={backgroundColor} />
		</div>
	);
}

export default App;
