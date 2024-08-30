import React from "react";
import "./product-card.scss";

//CHILDREN PROPS
export const ProductCard = (props) => {
	return (
        // {props.children} will give the value in the children, which is description
		<div className="product-card">
			<h3>{props.title}</h3>
			<p>{props.children}</p>
			<p>{props.desc}</p>
			<h5>{props.price}</h5>
		</div>
	);
};
