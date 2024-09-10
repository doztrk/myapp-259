import React, { useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { UseEffect2 } from "./use-effect2";

export const UseEffect1 = () => {
	const [message, setMessage] = useState("");
	const [error, setError] = useState("");
	const [showComp, setShowComp] = useState(false);

	/* !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
  UseEffect is async, hence it will run after the render
  !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! */
	useEffect(() => {
		console.log("MOUNTING: These codes only work in the render");
	}, []);

	useEffect(() => {
		console.log("UPDATING: These codes only work in the re-render and render");
	});

	useEffect(() => {
		console.log("UPDATING: These codes only work if the DEPENDENCY ARRAY variable(s) changed");
	}, [error]); // <--- DEPENDENCY ARRAY

	console.log("This always works");

	const el = document.getElementById("message"); //Gives error because return statement is going to work after this
	//This why, we need to use useEffect hook to get it.

	return (
		<div id="message" className="mt-5 text-center">
      {showComp && <UseEffect2/>}
			<Button onClick={() => setMessage(Math.random())}>Set Message</Button>
			<Button onClick={() => setError(Math.random())} className="mx-3">
				Set Error
			</Button>

			<Button onClick={() => setShowComp((prev) => !prev)}>Toggle Comp</Button>
		</div>
	);
};
