import React, { useState } from "react";
import { Child } from "./child";

export const Parent = () => {
	const [counter, setCounter] = useState(0);

	// State is used when data is being transferred from child component to parent component
	//A function that has value changing function is sent to parent component from child component
	//This function is set in the parent component.Its' function is to change the state according to the criterias set.
	const handleCounter = (val) => {
		if (val === -1 && counter === 0) return;

		setCounter((prev) => prev + val);
	};

	return (
		<div className="text-center mt-5">
			<h1>{counter}</h1>
			<Child handleCounter={handleCounter} />
		</div>
	);
};
