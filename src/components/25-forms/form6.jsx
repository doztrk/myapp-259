import { useFormik } from "formik";
import React, { useState } from "react";
import { Alert, Button, Container, Form, Spinner } from "react-bootstrap";
import * as Yup from "yup";

export const Form6 = () => {
	const [message, setMessage] = useState("");
	const initialValues = {
		firstName: "",
		lastName: "",
		phoneNumber: "",
		email: "",
		address: "",
	};
	const validationSchema = Yup.object({
		firstName: Yup.string().min(2, "First Name must be at least 2 characters").required("First Name is required"),
		lastName: Yup.string().min(2, "Last Name must be at least 2 characters").required("Last Name is required"),
		phoneNumber: Yup.string()
			.min(10, "Phone Number must be at least 10 characters")
			.max(15, "Phone Number must be at most 15 characters")
			.required("Phone Number is required"),
		email: Yup.string().email("Email is invalid").required("Email is required"),
		address: Yup.string().required("Address is required"),
	});
	const onSubmit = (values) => {
		setTimeout(() => {
			setMessage("Form submitted successfully");
			formik.resetForm();
		}, 3000);
		console.log(values);
	};

	const formik = useFormik({
		initialValues,
		validationSchema,
		onSubmit,
	});

	const isInvalid = (field) => {
		return formik.touched[field] && !!formik.errors[field];
	};
	const isValid = (field) => {
		return formik.touched[field] && !formik.errors[field];
	};

	return (
		<Container className="mt-3">
			<Form noValidate onSubmit={formik.handleSubmit}>
				<Form.Group className="mb-3" controlId="firstName">
					<Form.Label>First Name</Form.Label>
					<Form.Control
						name="firstName"
						type="text"
						value={formik.values.firstName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("firstName")}
						isValid={isValid("firstName")}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.firstName}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="lastName">
					<Form.Label>Last Name</Form.Label>
					<Form.Control
						name="lastName"
						type="text"
						value={formik.values.lastName}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("lastName")}
						isValid={isValid("lastName")}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.lastName}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="phoneNumber">
					<Form.Label>Phone Number</Form.Label>
					<Form.Control
						name="phoneNumber"
						type="text"
						value={formik.values.phoneNumber}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("phoneNumber")}
						isValid={isValid("phoneNumber")}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.phoneNumber}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="email">
					<Form.Label>Email</Form.Label>
					<Form.Control
						name="email"
						type="text"
						value={formik.values.email}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("email")}
						isValid={isValid("email")}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.email}</Form.Control.Feedback>
				</Form.Group>

				<Form.Group className="mb-3" controlId="address">
					<Form.Label>Address</Form.Label>
					<Form.Control
						name="address"
						type="text"
						as="textarea"
						rows={3}
						value={formik.values.address}
						onChange={formik.handleChange}
						onBlur={formik.handleBlur}
						isInvalid={isInvalid("adress")}
						isValid={isValid("adress")}
					/>
					<Form.Control.Feedback type="invalid">{formik.errors.address}</Form.Control.Feedback>
				</Form.Group>

				<Button variant="primary" type="submit" disabled={formik.isSubmitting || !(formik.dirty && formik.isValid)}>
					{formik.isSubmitting && <Spinner animation="border" size="sm" className="me-2" />}
					Send
				</Button>

				<Alert variant="success" className={message ? "d-block mt-3" : "d-none"}>
					{message}
				</Alert>
			</Form>
		</Container>
	);
};
4;
