import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    input: {
        marginTop:270,
        paddingTop: 20,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 5,
        marginBottom:1,
    },
    inputDois: {
        marginTop:30,
        paddingTop: 20,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 4,
        borderRadius: 5,
        marginBottom:1,
        
    },
    botao: {
        marginTop:30,
        alignItems: "center",
        marginLeft: 90,
        backgroundColor: "#FFC0CB",
        marginLeft: 24,
        width: "90%",
        justifyContent: "center",
        padding: 5,
        borderRadius: 8,
        padding: 15,
        borderRadius: 50,
        borderWidth:5,
        borderColor: "#A0522D",
        fontSize: 25
    },
    botaoDois: {
        marginTop:30,
        alignItems: "center",
        backgroundColor: "white",
        marginLeft: 24,
        width: "90%",
        justifyContent: "center",
        padding: 10,
        borderRadius: 50,
        borderWidth:5,
        borderColor: "#ecaba7",
        fontSize: 25
    },
    forget: {
        fontStyle: "italic",
        textDecorationLine: "underline",
        color: "#836FFF",
        marginLeft: 90,
        marginTop: 20,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'brown'
    },
    fundo: {
        flex:1,
    },
    logo: {
        marginTop:5,
        width: 150, 
        height: 150, 
        borderRadius: 400 / 2, 
        left: 131,
    },
});