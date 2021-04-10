import React from "react";
import { Box } from "@chakra-ui/react";

function Main(props) {
	return (
		<Box p="20px" bgColor="gray.100">
			{props.render()}
		</Box>
	);
}

export default Main;
