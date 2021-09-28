import React from "react";
import { Typography, Card } from "@mui/material";

const ResultContainer = ({ resultMsg, score, textColor, backgroundColor }) => {
	if (resultMsg !== "") {
		return (
			<Card
				sx={{
					padding: "10px",
					marginTop: "10px",
					backgroundColor: backgroundColor,
				}}
			>
				<Typography
					color="inherit"
					variant="h5"
					sx={{
						color: textColor,
						fontWeight: "bold",
					}}
				>
					Your green score: {score}
				</Typography>
				<Typography
					color="inherit"
					variant="h5"
					sx={{
						color: textColor,
					}}
				>
					{resultMsg}
				</Typography>
			</Card>
		);
	} else {
		return <></>;
	}
};

export default ResultContainer;
