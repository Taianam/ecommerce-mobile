import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "#f08080",
	},

	itens: {
		flexDirection: "row",
		borderWidth: 1,
		borderColor: "#fff",
		backgroundColor: "#fff",
		borderRadius: 5,
		padding: 5,
		width: "80%",
		marginVertical: 5,
		justifyContent: "space-between",
		alignSelf: "center",
		alignContent: "center",
	},

	botao: {
		width: "5%",
	},

	nova: {
		marginTop: 30,
		marginBottom: 5,
		padding: 5,
		borderRadius: 5,
		alignSelf: "flex-end",
		backgroundColor: "#fff",
		marginHorizontal: "10%",
	},

	nome: {
		height: "100%",
		maxWidth: "35%",
		textAlign: "center",
		textAlignVertical: "center",
	},

	descricao: {
		maxWidth: "40%",
		textAlign: "center",
		textAlignVertical: "center",
		height: "100%",
	},

	imagem: {
		width: 350,
		height: 150,
	},
});

export default styles;
