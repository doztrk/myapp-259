import React, { useEffect, useRef } from "react";
import { Container, FormControl } from "react-bootstrap";

export const UseRef = () => {
	const inputUserNameRef = useRef(null);
	const result = useRef(0);
	//In re-render process, state and ref values are preserved.

	//This can be done but doing this will cause repaint, something we dont want
	useEffect(() => {
		const input = inputUserNameRef.current;

		input.focus();
		input.classList.add("bg-info-subtle");

		result.current = 5;
		//Change of UseRef value does not re-render the component.
	}, []);
	return (
		<Container>
			<FormControl ref={inputUserNameRef} />
		</Container>
	);
};
