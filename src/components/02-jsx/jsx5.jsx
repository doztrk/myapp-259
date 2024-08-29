import React from "react";

export const Jsx5 = () => {
	const isAdmin = false;
	const discount = 0;
	/* In JSX structures, `if` or `switch` statements cannot be used. Instead, the ternary or short circuit operator is used. */

	return (
		<div>
			{/* Ternary Operator */}
			{isAdmin ? <h2>"Admin User"</h2> : <h2>"Customer User"</h2>}

			<div>
				{/* Short Circuit Operator*/}
				{!!discount && <h3> Discount: {discount}</h3>}
			</div>
		</div>
	);
};
