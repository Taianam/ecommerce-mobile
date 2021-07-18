import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F08080",
		alignItems: "center",
		justifyContent: "center",
	},

	imagemPrincipal: {
		alignItems:"center",
		justifyContent: "center",
		width: 350,
		height: 150,
		marginRight: 35
		  
	},

	image: {
		width: 120,
		height: 120,
		marginVertical: 10,
		borderRadius: 450/ 2,
		marginLeft: 5
	},

	view: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 10,
		marginVertical: 7,
	},
	text: {
		maxWidth: "60%",
		height: "100%",
		marginHorizontal: 10,
		padding: 10,
		textAlign: "center",
		textAlignVertical: "center",
		color: "#F08080",
	},

});

export default styles;
