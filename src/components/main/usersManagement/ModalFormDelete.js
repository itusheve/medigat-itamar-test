import React from "react";
import {
	Button,
	Modal,
	ModalOverlay,
	ModalHeader,
	ModalCloseButton,
	FormControl,
	Input,
	FormLabel,
	ModalFooter,
	ModalBody,
	ModalContent,
	useDisclosure,
	Flex,
	Text,
} from "@chakra-ui/react";
import Permissions from "./Permissions.js";

function ModalForm({ mc, initialRef, title }) {
	return (
		<>
			<Modal
				initialFocusRef={initialRef}
				isOpen={mc.isOpen}
				onClose={mc.onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>{title}</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<Text>Are you sure you want to delete this user?</Text>
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Ok
						</Button>
						<Button onClick={mc.onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalForm;
