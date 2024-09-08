import React, { useState } from "react";
import { Button, Container, ButtonGroup } from "react-bootstrap";
import { TfiMinus, TfiPlus, TfiClose, TfiReload } from "react-icons/tfi";

export const Counter1 = () => {
	const [counter, setCounter] = useState(0);

	return (
		<Container className="my-5">
			<ButtonGroup aria-label="Basic example">
				<Button variant="secondary" onClick={() => setCounter(0)}>
					<TfiReload></TfiReload>
				</Button>

				<Button variant="danger" onClick={() => setCounter((prev) => prev - 1)}>
					<TfiMinus></TfiMinus>
				</Button>

				<Button variant="secondary" disabled>
					{counter}
				</Button>

				<Button variant="danger" onClick={() => setCounter((prev) => prev + 1)}>
					<TfiPlus></TfiPlus>
				</Button>
			</ButtonGroup>
		</Container>
	);
};
