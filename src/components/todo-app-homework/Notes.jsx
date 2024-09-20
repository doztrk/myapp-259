import React from "react";
import { Note } from "./Note.Jsx";
import { Col, ListGroup } from "react-bootstrap";

export const Notes = ({ notes, toggleComplete, deleteNote }) => {
	return (
		<>
			{notes.map((note) => (
				<Col>
					<Note key={note.id} note={note} toggleComplete={toggleComplete} deleteNote={deleteNote} />
				</Col>
			))}
		</>
	);
};
