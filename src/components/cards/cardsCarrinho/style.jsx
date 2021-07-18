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

	conteinerDois: {
		width: "60%",
		justifyContent: 'space-around',
		paddingLeft: 5
	},

	cont: {
		borderWidth: 1,
		borderColor: "#ecaba7",
		flexDirection: "row",
		backgroundColor: "#fff",
		borderRadius: 6,
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
		paddingTop: 2,
		width: "100%",
		flexDirection: 'row',
		justifyContent: 'space-between'
	},

	conteinerDireita: {
		flexDirection: 'row',
		justifyContent: "space-between",
	},

	image: {
		flex: 1,
	},
	acao:{
		flexDirection: 'row'
	}
});
