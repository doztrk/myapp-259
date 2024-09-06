import React from "react";
import { Card, Button } from "react-bootstrap";

export const Product = ({ image, title, desc, price }) => {
	// if props are small, this method is easier rather than creating props object

	return (
		<Card className="text-center h-100">
			<Card.Body>
				<Card.Img variant="top" src={`/images/products/${image}`} />
				<Card.Title className="mt-3">{title}</Card.Title>
				<Card.Text>{desc}</Card.Text>
				<Card.Subtitle className="mb-3">{price}$</Card.Subtitle>
				<Button variant="warning">Add to cart</Button>
			</Card.Body>
		</Card>
	);
};
