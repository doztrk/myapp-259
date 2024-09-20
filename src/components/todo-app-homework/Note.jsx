import React from "react";
import { ListGroup, Form, Button, Card } from "react-bootstrap";
import { FaTrashAlt } from "react-icons/fa";

export const Note = ({ note, toggleComplete, deleteNote }) => {
	return (
		<Card className="h-100">
			<Card.Body className="d-flex justify-content-between align-items-center">
				<div className="d-flex align-items-center">
					<Form.Check type="checkbox" checked={note.completed} onChange={() => toggleComplete(note.id)} className="me-2" />
					<span style={{ textDecoration: note.completed ? "line-through" : "" }}>{note.title}</span>
				</div>
				<Button variant="danger" size="sm" onClick={() => deleteNote(note.id)}>
					<FaTrashAlt/>
				</Button>
			</Card.Body>
		</Card>
	);
};
