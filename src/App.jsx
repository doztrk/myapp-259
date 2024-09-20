import React, { useEffect, useState } from "react";
import { AppRouter } from "./router";
import StoreContext from "./store";
import { UseCurrencies } from "./hooks/usecurrencies";

export const App = () => {
	const { currencies, error, loading } = UseCurrencies();

	return (
		<StoreContext.Provider value={{ currencies }}>
			<AppRouter />
		</StoreContext.Provider>
	);
};
