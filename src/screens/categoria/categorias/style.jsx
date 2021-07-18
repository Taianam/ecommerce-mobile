import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    height:  '100%',
    backgroundColor: "#f08080",
  },
  botaos: {
	flexDirection:"row",
	justifyContent: "space-between",
},

  itens: {
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#c27676e6",
    backgroundColor: "#f7baba",
    borderRadius: 5,
    padding: 5,
    width: "95%",
    marginVertical: 5,
    justifyContent: "space-between",
    alignSelf: "center",
  },

  botao: {
    width: "5%",
  },
  buttonSair: {
    padding: 10,
    backgroundColor: "#A0522D",
    borderRadius: 4,
    flexDirection: "row",
    margin: 12,
  },
  texto: {
    color: "#fff",
  },

  nova: {
    backgroundColor: "#fc7782",
    margin: 12,
    paddingHorizontal: 40,
    padding: 15,
    borderRadius: 5,
    alignSelf: "flex-end",
  },

  nome: {
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
    width: "100%",
    height: "20%",
  },
  image: {
    flex: 1,
  },
});

export default styles;
