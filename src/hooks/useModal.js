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
} from "@chakra-ui/react";

function useModal() {
	const { isOpen, onOpen, onClose } = useDisclosure();

	const initialRef = React.useRef();

	return (
		<>
			<Button onClick={onOpen}>Open Modal</Button>

			<Modal
				initialFocusRef={initialRef}
				isOpen={isOpen}
				onClose={onClose}
			>
				<ModalOverlay />
				<ModalContent>
					<ModalHeader>Create your account</ModalHeader>
					<ModalCloseButton />
					<ModalBody pb={6}>
						<FormControl>
							<FormLabel>First name</FormLabel>
							<Input ref={initialRef} placeholder="First name" />
						</FormControl>

						<FormControl mt={4}>
							<FormLabel>Last name</FormLabel>
							<Input placeholder="Last name" />
						</FormControl>
					</ModalBody>

					<ModalFooter>
						<Button colorScheme="blue" mr={3}>
							Save
						</Button>
						<Button onClick={onClose}>Cancel</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</>
	);
}

export default useModal;
