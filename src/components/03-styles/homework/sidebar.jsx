import React from "react";
import { styles } from "./styles"; 

export const Sidebar = () => {
	return (
		<aside style={styles.sidebar}>
			<ul style={styles.ul}>
				<li style={styles.li}>Menu Item 1</li>
				<li style={styles.li}>Menu Item 2</li>
				<li style={styles.li}>Menu Item 3</li>
				<li style={styles.li}>Menu Item 4</li>
			</ul>
		</aside>
	);
};

