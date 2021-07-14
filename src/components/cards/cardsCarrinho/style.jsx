import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
	imagem: {
		borderRadius: 8,
		width: 120,
		height: 100,
		margin: 3,
		borderWidth: 1,
	},

	botao: {
		color: "#F08080",
		alignItems: "flex-end",
		padding: 3,
	},

	conteinerUm: {
		justifyContent: "center",
	},

	conteinerDois: {
		width: "60%",
		flexDirection: "row",
		justifyContent: "space-between",
	},

	cont: {
		borderWidth: 1,
		borderColor: "#ecaba7",
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 6,
		justifyContent: "space-around",
		marginHorizontal: 10,
		marginVertical: 5,
	},

	nome: {
		fontSize: 18,
	},

	preco: {
		fontSize: 15,
		color: "#0088",
		fontWeight: "bold",
		marginBottom: 5,
	},

	conteinerTextos: {
		paddingVertical: 7,
		height: "100%",
		maxWidth: "60%",
	},

	conteinerDireita: {
		justifyContent: "space-between",
	},

	image: {
		flex: 1,
	},
});
