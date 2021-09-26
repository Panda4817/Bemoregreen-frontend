import React from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import ContentContainer from "../ContentContainer/ContentContainer";
import { Typography } from "@mui/material";

const Main = ({ children, textColor, backgroundColor, menuValue, handleChange }) => {
	return (
		<Grid
			container
			sx={{
				justifyContent: "center",
				marginTop: "5%",
			}}
		>
			<Card sx={{ width: "80%" }}>
				<Box sx={{ width: "100%", backgroundColor: backgroundColor }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={menuValue}
							onChange={handleChange}
							aria-label="menu"
							centered
							textColor="inherit"
							variant="fullWidth"
							sx={{
								color: textColor,
							}}
							TabIndicatorProps={{
								style: {
									backgroundColor: textColor,
									color: textColor,
								},
							}}
						>
							<Tab label="Green Quiz" />
							<Tab label="Planet Stats" />
							<Tab label="Eco Tips" />
						</Tabs>
					</Box>
					<ContentContainer menuValue={menuValue} index={0}>
						<Typography>Item One</Typography>
					</ContentContainer>
					<ContentContainer menuValue={menuValue} index={1}>
						<Typography>Item two</Typography>
					</ContentContainer>
					<ContentContainer menuValue={menuValue} index={2}>
						<Typography>Item three</Typography>
					</ContentContainer>
				</Box>
			</Card>
		</Grid>
	);
};

export default Main;
