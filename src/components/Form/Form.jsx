import React, { useEffect, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";

const server = process.env.REACT_APP_SERVER;
const Form = ({ textColor, backgroundColor, submitForm }) => {
	const [questions, setQuestions] = useState([]);
	const [answers, setAnswers] = useState([]);
	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch(`${server}/api/questions`)
			.then((response) => response.json())
			.then((data) => {
				setQuestions(data.data);
				setAnswers(() => {
					let arr = [];
					arr.length = data.data.length;
					arr.fill(0);
					return arr;
				});
			});
	}, []);
	return (
		<Grid
			container
			sx={{
				justifyContent: "center",
				color: textColor,
				backgroundColor: backgroundColor,
			}}
		>
			<form>
				{questions.map((question_obj, question_index) => {
					return (
						<FormControl
							component="fieldset"
							sx={{
								display: "flex",
								padding: "3%",
								width: "100%",
							}}
							key={`question${question_index}`}
						>
							<FormLabel
								component="legend"
								sx={{
									textAlign: "left",
									color: textColor,
									"&.Mui-focused": {
										color: textColor,
									},
								}}
							>{`${question_index + 1}) ${question_obj.question}`}</FormLabel>
							<RadioGroup
								aria-label={question_obj.question}
								defaultValue={0}
								name={`question${question_index}`}
								onChange={(event) => {
									setAnswers((answers) => {
										answers[question_index] = parseInt(event.target.value);
										return answers;
									});
								}}
							>
								{question_obj.answers.map((answer_text, answer_index) => {
									return (
										<FormControlLabel
											key={`${question_index}-${answer_index}`}
											value={answer_index}
											sx={{
												textAlign: "left",
											}}
											control={
												<Radio
													sx={{
														color: textColor,
														"&.Mui-checked": {
															color: textColor,
														},
													}}
												/>
											}
											label={answer_text}
										/>
									);
								})}
							</RadioGroup>
						</FormControl>
					);
				})}
				<Button
					onClick={() => submitForm(answers)}
					sx={{
						color: textColor,
						backgroundColor: backgroundColor,
						"&:hover": {
							color: backgroundColor,
							backgroundColor: textColor,
						},
					}}
				>
					Submit answers
				</Button>
			</form>
		</Grid>
	);
};

export default Form;
