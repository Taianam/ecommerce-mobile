import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},

	imput: {
		backgroundColor: "#FFC0CB",
		borderRadius: 4,
		borderWidth: 1,
		borderColor: "#A0522D",
		marginBottom: 15,
		width: "85%",
		height: 50,
		paddingHorizontal: 12,
		paddingVertical: 7,
		fontSize: 12,
		marginHorizontal: 50,
		alignSelf: "center",
	},

	image: {
		width: "100%",
		height: "100%",
	},

	button: {
		width: "73%",
		height: 50,
		backgroundColor: "#F2B6BB",
		borderRadius: 4,
		flexDirection: "row",
		alignItems: "center",
		borderWidth: 2,
		borderColor: "#A0522D",

		alignSelf: "center",
	},

	title: {
		flex: 1,
		textAlign: "center",
		color: "#000",
	},

	form: {
		flex: 1,
		alignItems: "center",
	},

	titulo: {
		textAlign: "center",
		color: "#000",
		fontSize: 40,
	},

	imagem: {
		width: 350,
		height: 150,
	},
});

export default styles;
