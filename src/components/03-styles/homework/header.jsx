import React from "react";
import { styles } from "./styles";

export const Header = () => {
	return (
		<header style={styles.header}>
			<input style={styles.header.input} type="text" placeholder="Search" />
			<ul style={styles.header.ul}>
				<li style={styles.header.ul.li}>Menu</li>
				<li style={styles.header.ul.li}>Contact</li>
				<li style={styles.header.ul.li}>Info</li>
			</ul>
		</header>
	);
};
