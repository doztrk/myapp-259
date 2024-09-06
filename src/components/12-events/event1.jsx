import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event1 = () => {
	const handleClick = () => {
		alert("Button Clicked");
	};

	//When putting handle in event listeners, : onClick = {handleClick} can be written
	//But if we put onClick = {handleClick()}, it will call the handleClick function without clicking it first, and click function will not work

	return (
		<Container className="mt-5">
			<h1>EVENTS</h1>
			<Button variant="primary" onClick={handleClick}>
				Click {/* Event Listener ⬈ */} {/* ⬉Event Handler  */}
			</Button>
		</Container>
	);
};
