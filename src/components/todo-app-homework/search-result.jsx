import axios from "axios";
import React, { useEffect, useState } from "react";

export const SearchResults = () => {
	const [notes, setNotes] = useState([]);
	useEffect(() => {
		const loadData = async () => {
			const res = await axios("ww.com");
		};
	});
	return <div>SearchResults</div>;
};
