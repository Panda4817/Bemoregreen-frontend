import React from "react";
import Box from "@mui/material/Box";

const ContentContainer = ({ children, menuValue, index }) => {
	return (
		<div
			role="tabpanel"
			hidden={menuValue !== index}
			id={`tabpanel-${index}`}
			aria-labelledby={`tab-${index}`}
		>
			{menuValue === index && <Box sx={{ p: 3 }}>{children}</Box>}
		</div>
	);
};

export default ContentContainer;
