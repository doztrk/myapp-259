import React, { useState } from "react";
import { Container, FormControl } from "react-bootstrap";

export const Form1 = () => {
	const [email, setEmail] = useState("john@doe.com");
	return (
		<Container className="my-5">
			<h5>{email}</h5>
			{/* CONTROLLED INPUT: Input been tied to a state */}
			<FormControl type="email" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />

			{/* UNCONTROLLED INPUT: If input is not been tied to a state*/}
			<FormControl className="mt-4" defaultValue="John" />
            
		</Container>
	);
};
