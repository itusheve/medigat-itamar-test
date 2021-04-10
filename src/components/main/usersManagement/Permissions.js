import React, { useEffect, useState } from "react";
import { Checkbox, Stack, Heading, Box, Text, VStack } from "@chakra-ui/react";

function Permissions() {
	const [checkboxes, setCheckboxes] = useState({});
	const [hospitals, setHospitals] = useState({});
	const [allChecked, setAllCheked] = useState(false);

	useEffect(() => {
		const checkboxes_new = { ...checkboxes };
		if (allChecked) {
			hospitals.forEach(
				(hospital) => (checkboxes_new[hospital.name] = false)
			);
			setCheckboxes(checkboxes_new);
		}
	}, [allChecked]);

	const handleChangeAll = () => {
		setAllCheked((prev) => !prev);
	};

	const handleChange = (e, hospital) => {
		const checkboxes_new = { ...checkboxes };
		checkboxes_new[hospital] = !checkboxes_new[hospital];
		setCheckboxes(checkboxes_new);
	};

	useEffect(() => {
		(async () => {
			try {
				const checkboxes = {};
				const hospitals = await window.medAPI.hospitals.list();

				setHospitals(hospitals);
				hospitals.forEach((hospital) =>
					Object.assign(checkboxes, { [hospital.name]: false })
				);
			} catch (error) {
				console.log(error);
			}
		})();
	}, []);

	return (
		<VStack
			maxHeight="200px"
			alignItems="flex-start"
			spacing="15px"
			overflow="hidden"
		>
			<Heading
				as="h5"
				fontSize="sm"
				textTransform="uppercase"
				fontWeight="light"
			>
				permissions
			</Heading>
			<Checkbox
				size="sm"
				fontWeight="bold"
				isChecked={allChecked}
				onChange={handleChangeAll}
			>
				All hospitals in network
			</Checkbox>
			<Heading fontWeight="light" fontSize="sm">
				Can view only:
			</Heading>

			<Stack w="100%" overflow="scroll" pl={6} mt={1} spacing={1}>
				{hospitals.length &&
					hospitals.map((hospital) => (
						<Checkbox
							key={hospital.id}
							isChecked={checkboxes[hospital.name]}
							isDisabled={allChecked}
							fontWeight="light"
							size="sm"
							onChange={(e) => handleChange(e, hospital.name)}
						>
							{hospital.name}
						</Checkbox>
					))}
			</Stack>
		</VStack>
	);
}

export default Permissions;
