import React, { useEffect } from "react";

export const UseEffect2 = () => {
	useEffect(() => {
		console.log("MOUNTING2 ");

		return () => {
			console.log("UNMOUNTING2: This line works when the compononent is about to be unmounted from DOM");
		};
	}, []);
	return <div>UseEffect2</div>;
};
