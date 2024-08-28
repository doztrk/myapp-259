//RULE 4: To insert a JavaScript expression within JSX, {} must be used.


export const Jsx2 = () => {
	const student = {
		name: "John",
		age: 18,
        skills: ["HTML", "CSS", "JS"],
		adress:{
            street: "Main",
            city: "London",
            country: "UK"
        }
	};

	return (
		<ul>
			<li>
				<b>Firstname:</b>
				{student.name}
			</li>
			<li>
				<b>Age: </b>
				{student.age}
			</li>
			<li>
				<b>City: </b>
				{student.adress.city}
			</li>
            <li>
				<b>Skills: </b>
				{student.skills.toString()}
			</li>
		</ul>
	);
};
