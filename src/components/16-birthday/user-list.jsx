import React, { useState } from "react";
import { Button, Container } from "react-bootstrap";
import data from "./people.json";
import { User } from "./user";
import { MdCelebration, MdOutlineCelebration } from "react-icons/md";

export const UserList = () => {
	const [users, setUsers] = useState(data);

	const celebrateUser = (id) => {
		const arr = users.map((item) => (item.id === id ? { ...item, celebrated: true } : item));
		setUsers(arr);
	};
	const celebrateAll = () => {
		const arr = users.map((item) => ({ ...item, celebrated: true }));
		setUsers(arr);
	};

	const getAmountOfCelebratedUser = () => {
		const arr = users.filter((item) => item.celebrated);
		return arr.length;
	};

	return (
		<Container className="my-5">
			<h2>Birthday people</h2>
			<p>
				{users.length} People were born today and you have celebrated {getAmountOfCelebratedUser()} of them
			</p>

			{users.map((person) => (
				<User key={person.id} {...person} celebrateUser={celebrateUser} />
			))}
			<Button onClick={celebrateAll}>
				<MdOutlineCelebration />
				Celebrate All
			</Button>
		</Container>
	);
};
