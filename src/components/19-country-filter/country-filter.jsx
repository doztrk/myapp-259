import React, { useEffect, useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";
import data from "./countries.json";
export const CountryFilter = () => {
	const [searchText, setSearchText] = useState("");
	const [countries, setCountries] = useState([]);

	    //In re-render process, state and ref values are preserved.


	useEffect(() => {
		if (!searchText) {
			setCountries([]);
            return;
		}
		const arr = data.filter((item) => item.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()));
		setCountries(arr);
	}, [searchText]);

	return (
		<Container className="my-5">
			<h1 className="text-center">Country Filter</h1>
			<FormControl placeholder="Enter Country Name" type="search" onChange={(e) => setSearchText(e.target.value)} />
			<Card className={`mt-5 ${!countries.length ? "d-none" : ""}`}>
				<Card.Body>
					{countries.map((item, index) => (
						<p key={item.code}>
							{index + 1} - {item.name}
						</p>
					))}
				</Card.Body>
			</Card>
		</Container>
	);
};
