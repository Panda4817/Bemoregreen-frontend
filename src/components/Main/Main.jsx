import React from "react";
import Grid from "@mui/material/Grid";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";

const Main = ({ children, textColor, backgroundColor, menuValue, handleChange }) => {
	return (
		<Grid
			container
			sx={{
				justifyContent: "center",
				marginTop: "50px",
				marginBottom: "100px",
			}}
		>
			<Card
				sx={{
					width: "90%",
				}}
			>
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
					{children}
				</Box>
			</Card>
		</Grid>
	);
};

export default Main;
