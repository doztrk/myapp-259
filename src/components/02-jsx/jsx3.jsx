/*RULE 5: A fragment is used to create a JSX structure without a parent.A blank element is used to create a JSX structure without a parent.*/
// <React.Fragment> </React.Fragment> instead of div bracket or empty div
import React from "react";

export const Jsx3 = () => {
	return (
		<>
			<p>Lorem ipsum dolor sit amet.</p>
			<p>Lorem ipsum dolor sit amet consectetur.</p>
			<p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>
		</>
	);
};
