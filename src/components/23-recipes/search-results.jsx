import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { RecipeCard } from "./recipe-card";

export const SearchResults = ({ searchText }) => {
	return (
		<Container className="my-4">
			<p>
				<em>15 Recipes Found</em>
			</p>
			<Row className="g-4" xs={1} sm={2} md={3} lg={4} xl={5}>
				<Col>{searchText}</Col>
			</Row>
		</Container>
	);
};
