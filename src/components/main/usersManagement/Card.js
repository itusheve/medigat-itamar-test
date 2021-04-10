import React from "react";
import {
	Flex,
	HStack,
	VStack,
	Divider,
	Button,
	Avatar,
	Center,
	Text,
	Heading,
	useDisclosure,
} from "@chakra-ui/react";
import { FaPen, FaTrash } from "react-icons/fa";
import Permissions from "./Permissions.js";
import ModalForm from "../ModalForm.js";
import ModalFormDelete from "./ModalFormDelete.js";

function Card({ user }) {
	const controllers1 = useDisclosure();
	const controllers2 = useDisclosure();
	const initialRef1 = React.useRef();
	const initialRef2 = React.useRef();
	return (
		<VStack
			align="stretch"
			borderRadius="md"
			boxShadow="lg"
			bgColor="white"
			h="400px"
			p="15px"
		>
			<HStack justifyContent="flex-end" spacing="10px">
				<Flex>
					<button onClick={controllers1.onOpen}>
						<FaPen color="gray" />
					</button>
				</Flex>
				<Flex>
					<button onClick={controllers2.onOpen}>
						<FaTrash color="gray" />
					</button>
				</Flex>
			</HStack>
			<VStack>
				<Center>
					<Avatar
						size="xl"
						name="User"
						bgColor="blue.700"
						color="white"
					/>
				</Center>

				<Heading wordBreak="break-word" as="h4" size="md">
					{user && `${user.first_name} ${user.last_name}`}
				</Heading>
				<Text wordBreak="break-word" as="span" size="sm">
					{user?.email}
				</Text>
			</VStack>
			<Divider />
			<Permissions />
			<ModalForm
				mc={controllers1}
				initialRef={initialRef1}
				title={"Edit User"}
			/>
			<ModalFormDelete
				mc={controllers2}
				initialRef={initialRef2}
				title={"Delete user"}
			/>
		</VStack>
	);
}

export default Card;
