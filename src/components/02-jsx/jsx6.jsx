import React from "react";

export const Jsx6 = () => {
	let users = [
		{ id: 1, firstname: "John", lastname: "Doe", age: 29 },
		{ id: 2, firstname: "Jane", lastname: "Doe", age: 30 },
		{ id: 3, firstname: "Bob", lastname: "Kirk", age: 35 },
		{ id: 4, firstname: "Alice", lastname: "Wonder", age: 18 },
		{ id: 5, firstname: "Mark", lastname: "Anthony", age: 21 },
	];

	//Any iteration method can be used in this section (for, for of, for in, forEach, map, reduce).
	//But in JSX, only map can be used

	//Once upon a time in JS
	/* let strUsers = "";

    users.forEach((item) => {
       strUsers = `<li>${item.firstname} ${item.lastname}</li>`;
    });
    document.getElementById("users").innerHTML = strUsers;
 */

	return (
		<ul>
			{users.map((item) => (
				<li key={item.id}>
					{item.firstname} {item.lastname}
				</li>
			))}
		</ul>
	);
};
