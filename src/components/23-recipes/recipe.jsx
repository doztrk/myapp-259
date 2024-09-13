import React from "react";
import { Card, Badge } from "react-bootstrap";
import { LuChefHat } from "react-icons/lu";
import { FaStar, FaRegStar } from "react-icons/fa6";

export const Recipe = (props) => {
	const { name, image, cuisine, rating } = props;

	const score = Math.round(rating);

	const starsFull = [...new Array(score)].map((_, i) => <FaStar key={i} />);
	<s></s>;
	const starsEmpty = [...new Array(5 - score)].map((_, i) => <FaRegStar key={i} />);
	<s></s>;

	return (
		<Card className="h-100">
			<Card.Img variant="top" src={image} />
			<Card.Body>
				<Card.Title>{name}</Card.Title>
				<div>
					{starsFull}
					{starsEmpty}
				</div>
				<Badge bg="success" className="position-absolute top-0 end-0 m-3">
					<LuChefHat />

					{cuisine}
				</Badge>
			</Card.Body>
		</Card>
	);
};
