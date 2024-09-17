import React from "react";
import { Header } from "../components/00-common/header";
import { MainMenu } from "../components/00-common/main-menu";
import { Footer } from "../components/00-common/footer";

export const UserLayout = () => {
	return (
		<div>
			<Header />
			<MainMenu />
			<Outlet />
			<Footer />
		</div>
	);
};
