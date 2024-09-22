import React from "react";
import { Alert } from "react-bootstrap";

export const ErrorMessage = () => {
	return (
		<div className="vh-100 d-flex align-items-center justify-content-center">
			<Alert variant="danger">Something went wrong</Alert>
		</div>
	);
};
