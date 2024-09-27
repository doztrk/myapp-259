import React from "react";
import { Note } from "./Note.jsx";
import { Col, ListGroup } from "react-bootstrap";

export const Notes = ({ notes, toggleComplete, deleteNote }) => {
	return (
		<>
			{notes.map((note) => (
				<Col key={note.id}>
					<Note note={note} toggleComplete={toggleComplete} deleteNote={deleteNote} />
				</Col>
			))}
		</>
	);
};
