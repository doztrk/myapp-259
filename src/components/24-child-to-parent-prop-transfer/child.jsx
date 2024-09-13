import React from "react";
import { ButtonGroup, Button } from "react-bootstrap";
import { TfiMinus, TfiPlus } from "react-icons/tfi";

export const Child = ({ handleCounter }) => {
	return (
		<div>
			<ButtonGroup>
				<Button variant="danger" onClick={() => handleCounter(-1)}>
					<TfiMinus />
				</Button>
				<Button variant="info" onClick={() => handleCounter(1)}>
					<TfiPlus />
				</Button>
			</ButtonGroup>
		</div>
	);
};
