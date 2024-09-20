import React, { useState } from "react";
import { Alert, Button, Form } from "react-bootstrap";

export const NoteForm = ({ addNote }) => {
	const [input, setInput] = useState("");
	const [error, setError] = useState(false);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (input.trim() === "") {
			setError(true);
			return;
		}
		addNote(input);
		setInput("");
		setError(false);
	};

	return (
		<>
			{error && <Alert variant="danger">Please enter a note</Alert>}
			<Form onSubmit={handleSubmit}>
				<Form.Group className="mb-3">
					<Form.Label>Title</Form.Label>
					<Form.Control type="text" placeholder="Enter your note" value={input} onChange={(e) => setInput(e.target.value)} />
				</Form.Group>
				<Button variant="primary" type="submit">
					Create Note
				</Button>
			</Form>
		</>
	);
};
