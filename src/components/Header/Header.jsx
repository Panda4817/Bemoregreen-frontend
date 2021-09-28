import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

const Header = ({ textColor, backgroundColor, headerText }) => {
	return (
		<>
			<AppBar
				position="sticky"
				sx={{
					minHeight: "10vh",
					color: textColor,
					textAlign: "center",
					backgroundColor: backgroundColor,
				}}
			>
				<Toolbar
					sx={{
						justifyContent: "space-between",
					}}
				>
					<Typography variant="h3" color="inherit">
						Be More Green!
					</Typography>
					<Typography variant="body" color="inherit">
						{headerText}
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Header;
