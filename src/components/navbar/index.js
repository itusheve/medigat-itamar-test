import React from "react";
import { Flex, Center, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import logo from "../../imgs/logo_with_icon.png";
function NavBar() {
	return (
		<Flex bgColor="gray.200" h="120px" px="50px">
			<Link to="/logout">
				<Center>
					<Image boxSize="120px" objectFit="cover" src={logo} />
				</Center>
			</Link>
		</Flex>
	);
}

export default NavBar;
