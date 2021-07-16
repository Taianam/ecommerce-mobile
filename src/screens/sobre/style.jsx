import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#F08080",
		alignItems: "center",
		justifyContent: "center",
	},
	image: {
		width: 120,
		height: 120,
		marginVertical: 10,
	},
	imagemPrincipal: {
		width: 250,
		height: 140,
		alignItems: "center",
		justifyContent: "center",
		marginTop: 60,
	},
	view: {
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 20,
		marginVertical: 20,
	},
	text: {
		maxWidth: "50%",
		height: "100%",
		marginHorizontal: 10,
		padding: 10,
		textAlign: "center",
		textAlignVertical: "center",
		color: "#F08080",
	},
	inicio: {
		height: 200,
		backgroundColor: "#F08080",
	},
});

export default styles;
