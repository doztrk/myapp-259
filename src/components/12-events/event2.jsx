import React from "react";
import { Button, Container } from "react-bootstrap";

export const Event2 = () => {
	const handleClick = (name) => {
		alert(`Hello ${name}`);
	};



    //If parameter is to be given to event handler, a callback function inside the event listener must be used
	return (
		<Container className="mt-5">
			<h1>EVENTS</h1>
			<Button variant="primary" onClick={() => handleClick("Doğu")}>
				Click {/* Event Listener ⬈ */} {/* ⬉Event Handler  */}
			</Button>
		</Container>
	);
};
