import React from "react";

export const Jsx4 = () => {
	const isAdmin = true;
	let content = "";

	if (isAdmin) {
		content = <div>Admin User</div>;
	} else {
		content = <div>Customer User</div>;
	}

	return <div>{content}</div>;
};
