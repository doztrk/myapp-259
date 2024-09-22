import React, { useEffect, useState } from "react";

export const useCurrencies = () => {
	const [currencies, setCurrencies] = useState([]);
	const [error, setError] = useState("");
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const fetchCurrencies = async () => {
			try {
				const res = await fetch("https://api.frankfurter.app/latest?from-try");

				const data = await res.json();
				setCurrencies(data.rates);
			} catch (err) {
				setError(err);
			} finally {
				setLoading(false);
			}
		};
		//Normally, there is no reason to put setTimeout here.Faster the data comes,the better.
		//We put setTimeout to show the loading screen
		const timer = setTimeout(() => {
			fetchCurrencies();
		}, 1000);
		return () => clearTimeout(timer);
	}, []);

	return { currencies, error, loading };
};
