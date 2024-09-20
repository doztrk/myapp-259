import React from "react";
import { TfiHome } from "react-icons/tfi";
import { Link, useLocation } from "react-router-dom";

export const Header = () => {
	const { pathname } = useLocation();

	return (
		<div className="p-4 bg-info d-flex align-items-center justify-content-between">
			<h1>ReactJS</h1>

			{pathname !== "/" && (
				<div className="fs-3">
					<Link to="/" className="btn btn-warning btn-lg">
						<TfiHome />
					</Link>
				</div>
			)}
		</div>
	);
};
