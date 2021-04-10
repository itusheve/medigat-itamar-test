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
} from "@chakra-ui/react";
import Permissions from "./usersManagement/Permissions.js";

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
						<Flex alignItems="center">
							<FormControl mr="10px" display="inline-block">
								<FormLabel>First name</FormLabel>
								<Input
									ref={initialRef}
									placeholder="First name"
								/>
							</FormControl>
							<FormControl>
								<FormLabel>Last name</FormLabel>
								<Input placeholder="Last name" />
							</FormControl>
						</Flex>
						<FormControl mb={5} mt={4}>
							<FormLabel>Email</FormLabel>
							<Input placeholder="Email" />
						</FormControl>
						<Permissions />
					</ModalBody>
					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={mc.onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default ModalForm;
