import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    input: {
        marginTop: 260,
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 5,
        marginBottom:1,
    },
    inputDois: {
        marginTop: 25,
        paddingHorizontal: 12,
        paddingVertical: 7,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 4,
        borderRadius: 5,
        marginBottom:1,
        
    },
    acao:{
        flexDirection: 'row',
        marginTop: 30,
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 30
    },
    botao:{
        backgroundColor: "#FFC0CB", 
        borderColor: "#A0522D",
        borderRadius: 30,
        width: "40%",
        height: 40,
        borderWidth: 4,
        alignItems: 'center',
        justifyContent: 'center'
    },
    botaoTexto: {
        fontSize: 25,
        textAlign: "center",
    },
    botaoDois: {
        flexDirection: 'row',
        backgroundColor: "white",
        marginLeft: 20,
        width: "90%",
        borderRadius: 30,
        borderWidth: 4,
        borderColor: "#ecaba7",
        fontSize: 25,
        textAlign: "center",
        paddingLeft: 4,
        paddingTop: 3,
    },

    forget: {
        fontStyle: "italic",
        textDecorationLine: "underline",
        color: "#836FFF",
        marginLeft: 13,
        marginTop: 5,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'brown',
        fontSize: 14
    },
    fundo: {
        flex:1,
    },
    logo: {
        marginTop: 85,
        width: 153, 
        height: 153, 
        borderRadius: 400 / 2, 
        left: 130,
    },
});