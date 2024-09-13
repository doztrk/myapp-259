import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const Form2 = () => {
	const [firstName, setFirstName] = useState("");
	const [lastName, setLastName] = useState("");
	const [phoneNumber, setPhoneNumber] = useState("");
	const [email, setEmail] = useState("");
	const [adress, setAdress] = useState("");

	const handleSubmit = () => {
		alert("Hello");
	};

	return (
		<Container className="mt-5">
			<Form>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control type="text" value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="adress">
					<Form.Label>Adress</Form.Label>
					<Form.Control type="text" as="textarea" rows={3} value={adress} onChange={(e) => setAdress(e.target.value)} />
				</Form.Group>

				<Button variant="primary" type="submit" onClick={handleSubmit}>
					Send
				</Button>
			</Form>
		</Container>
	);
};
