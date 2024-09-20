import React from "react";
import { Link } from "react-router-dom";

export const Customers = () => {
	return (
		<div>
			<h1>Customers</h1>
			<ul>
				<li><Link to="/customers/1">John Doe</Link></li>
				<li><Link to="/customers/2">Alice Doe</Link></li>
				<li><Link to="/customers/3">Bob Odenkirk</Link></li>
				<li><Link to="/customers/4">Bryan Cranston</Link></li>
				<li><Link to="/customers/5">Peter Gould</Link></li>
				
			</ul>
		</div>
	);
};
