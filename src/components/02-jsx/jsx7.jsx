import React from "react";

//Using map method as for loop

export const Jsx7 = () => {
	const arr = [...new Array(100)].map((item, index) => index + 1);

	return (
		<div>
			{arr.map((item) => (
				<h4 key={item}>Hello Loop</h4>
			))}
		</div>
	);
};
