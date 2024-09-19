import React, { useEffect, useState } from "react";
import { FormControl, Button } from "react-bootstrap";
import "./searchbox.scss";

export const SearchBox = ({ setSearchText }) => {
	const [input, setInput] = useState({ value: "" });

	return (
		<div className="titleTextBox">
			<h1>Title</h1>
			<FormControl
				type="text"
				placeholder="Set Title"
				className="me-2 form-control"
				aria-label="Title"
				style={{ width: "300px" }}
				onChange={(e) => setInput({ value: e.target.value })}
			/>
			<Button variant="info" style={{ marginTop: "10px" }} onClick={() => setSearchText(input.value)}>
				Create Note
			</Button>
		</div>
	);
};
