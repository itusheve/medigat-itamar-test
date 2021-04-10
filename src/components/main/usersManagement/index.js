import React, { useState, useEffect } from "react";
import {
	Button,
	Flex,
	Box,
	SimpleGrid,
	Stack,
	useDisclosure,
} from "@chakra-ui/react";
import Card from "./Card.js";
import ModalForm from "../ModalForm.js";

function UsersManagement() {
	const [users, setUsers] = useState([]);
	const controllers = useDisclosure();
	const initialRef = React.useRef();

	useEffect(() => {
		(async () => {
			try {
				const users = await window.medAPI.users.list();
				setUsers(users);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);
	return (
		<Stack spacing="50px">
			<Box>
				<Button
					onClick={controllers.onOpen}
					color="white"
					bgColor="blue.700"
					_hover={{
						background: "blue.700",
						color: "white",
					}}
				>
					+ Add New User
				</Button>
			</Box>
			<SimpleGrid columns={[1, 2, 3, 4, 5]} spacing="30px">
				{users.length &&
					users.map((user) => <Card key={user.id} user={user} />)}
			</SimpleGrid>
			<ModalForm
				mc={controllers}
				initialRef={initialRef}
				title={"New User"}
			/>
		</Stack>
	);
}

export default UsersManagement;
