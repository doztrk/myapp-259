import React, { useState } from "react";
import { Container, Form, Button } from "react-bootstrap";

export const Form3 = () => {
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		adress: "",
	});
	console.log(formData);

	const handleSubmit = (e) => {
		//1-Canceling default submit

		//2-Form Validation
		if (!formData.firstName || !formData.lastName || !formData.phoneNumber || !formData.email || !formData.adress) {
			alert("Please fill in all fields");
			return;
		}

		//3-Creating Payload to be sent to API

		//4-Sending Payload to API
		alert("Form Submitted Successfully");
	};

	return (
		<Container className="mt-5">
			<Form action="#" onSubmit={handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						type="text"
						value={formData.firstName}
						onChange={(e) => setFormData((prev) => ({ ...prev, firstName: e.target.value }))}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						type="text"
						value={formData.lastName}
						onChange={(e) => setFormData((prev) => ({ ...prev, lastName: e.target.value }))}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						type="text"
						value={formData.phoneNumber}
						onChange={(e) => setFormData((prev) => ({ ...prev, phoneNumber: e.target.value }))}
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control type="text" value={formData.email} onChange={(e) => setFormData((prev) => ({ ...prev, email: e.target.value }))} />
				</Form.Group>

				<Form.Group className="mb-3" controlId="adress">
					<Form.Label>Adress</Form.Label>
					<Form.Control
						type="text"
						as="textarea"
						rows={3}
						value={formData.adress}
						onChange={(e) => setFormData((prev) => ({ ...prev, adress: e.target.value }))}
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Send
				</Button>
			</Form>
		</Container>
	);
};
