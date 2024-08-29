 const styles = {
	appContainer: {
		display: "flex",
		flexDirection: "column",
	},

	mainContainer: {
		display: "flex",
	},

	header: {
		marginBottom: "10px",
		display: "flex",
		justifyContent: "space-between",
		alignItems: "center",
		backgroundColor: "rgba(143, 203, 111)",
		padding: "20px",
		borderRadius: "20px",
		width: "100%",
		boxSizing: "border-box", 
		gap: "10px",

		input: {
			width: "200px",
			height: "30px",
			padding: "5px",
			border: "none",
		},

		ul: {
			display: "flex",
			listStyle: "none",
			gap: "10px",
			li: {
				color: "black",
				border: "10px solid rgb(166,220,139)",
				backgroundColor: "rgb(166,220,139)",
			},
		},
	},

	sidebar: {
		backgroundColor: "purple",
		padding: "10px",
		width: "200px",
		height: "100vh",
		display: "flex",
		flexDirection: "column",
		borderRadius: "20px",
		marginRight: "20px",
	},
	ul: {
		listStyleType: "none",
		padding: 0,
		margin: 0,
		flexGrow: 1,
		display: "flex",
		flexDirection: "column",
		gap: "10px",
	},
	li: {
		backgroundColor: "rgb(150,80,200)",
		borderRadius: "8px",
		color: "white",
		display: "flex",
		alignItems: "center",
		justifyContent: "center",
		flexGrow: 1,
		textAlign: "center",
	},

	content: {
		display: "grid",
		gridTemplateColumns: "repeat(3, 1fr)", // Creates 3 equal columns
		gap: "10px", // Adds spacing between the blocks
		backgroundColor: "rgb(234, 67, 53)", // Red background color
		padding: "20px",
		borderRadius: "8px", // Optional: Add border-radius for rounded corners
		flexGrow: 1, // Ensure content takes up remaining space next to sidebar
	},
	box: {
		backgroundColor: "rgba(255, 255, 255, 0.2)", // Lighter red/transparent background for content blocks
		padding: "20px",
		borderRadius: "8px", // Optional: Add border-radius for rounded corners
		textAlign: "center",
		color: "white", // White text color
		fontWeight: "bold",
	},
};
export { styles };
