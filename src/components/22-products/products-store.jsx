import React, { useEffect, useState } from "react";
import { Col, Container, Row, Card } from "react-bootstrap";

export const ProductsStore = () => {
	const [products, setProducts] = useState([]);


  /* The fetch call should be handled using useEffect to prevent re-fetching the products on every render. 
  Without useEffect, our component will fetch the products on every render, causing an infinite loop. */
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => setProducts(data.products));
	}, []);

	return (
		<Container className="my-5">
			<h1 className="text-center mb-4">Products Store</h1>

			<Row>
				{products.map((item) => {
					<Col key={item.id}>
						<Card.Body>HELLO</Card.Body>
					</Col>;
				})}
			</Row>
		</Container>
	);
};
