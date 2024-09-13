import React, { useEffect, useState } from "react";
import { SearchBox } from "./searchbox";
import { SearchResults } from "./search-results";

export const Recipes = () => {
	const [searchText, setSearchText] = useState("");

	useEffect(() => {
        
    }, [searchText]);
	return (
		<div>
			<SearchBox setSearchText={setSearchText} />
			<SearchResults searchText={searchText} />
		</div>
	);
};
