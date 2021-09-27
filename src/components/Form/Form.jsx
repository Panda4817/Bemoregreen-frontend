import React, { useEffect, useState } from "react";

const Form = () => {
	const server = process.env.REACT_APP_SERVER;
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		// GET request using fetch inside useEffect React hook
		fetch(`${server}/api/questions`)
			.then((response) => response.json())
			.then((data) => setQuestions(data.data));
	}, []);
	console.log(questions);
	return (
		<div>
			<h1>form</h1>
		</div>
	);
};

export default Form;
