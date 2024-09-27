import React, { useState } from "react";
import { Notes } from "./Notes.jsx";
import { NoteForm } from "./NoteForm.jsx";
import { Col, Container, Row } from "react-bootstrap";

export const TodoApp = () => {
	const [notes, setNotes] = useState([]);
	const addNote = (title) => {
		const newNote = {
			id: Date.now(),
			title,
			completed: false,
		};
		setNotes([...notes, newNote]);
	};
	const toggleComplete = (id) => {
		setNotes(notes.map((note) => (note.id === id ? { ...note, completed: !note.completed } : note)));
	};
	const deleteNote = (id) => {
		setNotes(notes.filter((note) => note.id !== id));
	};
	return (
		<Container fluid className="mt-5">
			<Row>
				<Col md={4} className="border-end">
					<h3>Todo App</h3>
					<NoteForm addNote={addNote} />
				</Col>
				<Col md={8}>
					<Notes notes={notes} toggleComplete={toggleComplete} deleteNote={deleteNote} />
				</Col>
			</Row>
		</Container>
	);
};
