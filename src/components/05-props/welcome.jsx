import React from "react";

export const Welcome = (props) => {
	return (
		<div style={{ color: props.textColor || "orange" }}>
			Welcome {props.firstName} {props.lastName}
		</div>
	);
};
