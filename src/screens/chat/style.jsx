import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
  container: {
    justifyContent: "flex-end",
    width: "100%",
    height: "100%",
    backgroundColor: "#fcc5c3",
  },
  header:{
    backgroundColor: '#fff',
    color: '#1d1c1c',
    textAlign: "center",
    fontSize: 18,
  },
  menssagens: {
    margin: 5,
    width: "100%",
  },
  enviarMensagemView: {
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#fff",
    paddingHorizontal: 7,
    paddingVertical: 5
  },
  enviarMensagemText:{
    width: '85%',
    fontSize: 16
  }
});

export const styleUsuario = StyleSheet.create({
  textUsuario: {
    textAlign: "right",
    fontSize: 16,
    paddingRight: 6,
  },
  mensagemUsuario: {
    borderRadius: 8,
    backgroundColor: "#d1caca",
    width: "80%",
    marginLeft: 60,
    padding: 3,
    alignItems: "flex-end",
    justifyContent: "flex-end",
  },
  timeUsuario: {
    width: "100%",
    textAlign: "left",
    fontSize: 10,
    paddingLeft: 2
  },
  usuarioNome: {
    paddingRight: 6,
    fontSize: 11,
  },
});

export const styleUsuarioOposto = StyleSheet.create({
  textUsuarioOposto: {
    textAlign: "left",
    fontSize: 16,
    paddingLeft: 6,
  },
  mensagemUsuarioOposto: {
    borderRadius: 8,
    backgroundColor: "#d1caca",
    width: "80%",
    padding: 3,
    alignItems: "flex-start",
  },
  timeUsuarioOposto: {
    width: "100%",
    textAlign: "right",
    fontSize: 10,
    paddingRight: 2
  },
  usuarioNomeOposto: {
    paddingLeft: 6,
    fontSize: 11,
  },
});
