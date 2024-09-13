import React, { useEffect, useState } from "react";
import { Col, Container, Row, Spinner } from "react-bootstrap";
import { Product } from "./product";

export const ProductsStore = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(true);

	/* The fetch call should be handled using useEffect to prevent re-fetching the products on every render. 
  Without useEffect, our component will fetch the products on every render, causing an infinite loop. */
	useEffect(() => {
		fetch("https://dummyjson.com/products")
			.then((res) => res.json())
			.then((data) => {
				setProducts(data.products);
				setIsLoading(false);
			});
	}, []);

	return (
		<Container className="my-5">
			<h1 className="text-center mb-4">Products Store</h1>

			{isLoading && <Spinner animation="border" variant="primary" className="d-block mx-auto my-3" />}

			<Row xs={1} sm={2} md={3} lg={4} className="g-4">
				{products.map((item) => (
					<Col key={item.id}>
						<Product
							title={item.title}
							thumbnail={item.thumbnail}
							description={item.description}
							availabilityStatus={item.availabilityStatus}
							price={item.price}
						/>
					</Col>
				))}
			</Row>
		</Container>
	);
};
