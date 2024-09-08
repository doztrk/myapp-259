import React from "react";
import { Container, Button } from "react-bootstrap";


export const Stateless = () => {
	let classes = "bg-dark text-light";

    //In this component, even though the classes var's value changes,
    //because component doenst have a state where it orders it to re-render, changes arent shown to the client

	const handleClasses = (mode) => {
		if (mode === "dark") {
			classes = "bg-dark text-light";
		} else {
			classes = "bg-light text-dark";
		}
	};

	return (
		<div>
			<Container className={`${classes} py-4`}>
				<h1>Dark/Light Switcher</h1>
				<div className="d-flex gap-3 mt-4">
					<Button onClick={() => handleClasses("dark")}>Dark Mode</Button>
					<Button onClick={() => handleClasses("light")}>Light Mode</Button>
				</div>
			</Container>
		</div>
	);
};
