import React, { useEffect, useState } from "react";
import { SearchBox } from "../todo-app-homework/searchbox";
import { SearchResults } from "./search-result";

export const Todo = () => {
	const [searchText, setSearchText] = useState("");

	useEffect(() => {}, [searchText]);
	return (
		<div>
			<SearchBox setSearchText={setSearchText} />
			<SearchResults searchText={searchText} />
		</div>
	);
};
