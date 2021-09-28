import React from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import CopyrightOutlinedIcon from "@mui/icons-material/CopyrightOutlined";

const Footer = ({ textColor, backgroundColor }) => {
	return (
		<>
			<AppBar
				position="fixed"
				sx={{
					maxHeight: "7vh",
					color: textColor,
					textAlign: "center",
					backgroundColor: backgroundColor,
					top: "auto",
					bottom: 0,
				}}
			>
				<Toolbar
					sx={{
						justifyContent: "center",
					}}
				>
					<Typography
						variant="p"
						color="inherit"
						sx={{
							marginRight: "1%",
						}}
					>
						Be More Green before it is too late!
					</Typography>
					<CopyrightOutlinedIcon color="inherit" />
					<Typography variant="p" color="inherit">
						2021
					</Typography>
				</Toolbar>
			</AppBar>
		</>
	);
};

export default Footer;
