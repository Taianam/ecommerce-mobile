import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
    },
    input: {
        backgroundColor: "#ccc",
        marginTop:80,
        paddingTop: 10,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 5,
        marginBottom:1,
    },
    inputDois: {
        marginTop:20,
        paddingTop: 10,
        backgroundColor: "#F08080",
        opacity:0.8,
        margin: 10,
        borderRadius: 4,
        borderRadius: 5,
        marginBottom:1,
        
    },
    botao: {
        marginTop:35,
        alignItems: "center",
        backgroundColor: "#708cc7",
        marginLeft: 90,
        width: "50%",
        backgroundColor: "#FFC0CB",
        marginLeft: 24,
        width: "90%",
        justifyContent: "center",
        padding: 7,
        borderRadius: 8,
        padding: 15,
        borderRadius: 50,
        borderWidth:5,
        borderColor: "#A0522D",
        fontSize: 25
    },
    botaoDois: {
        marginTop:35,
        alignItems: "center",
        backgroundColor: "white",
        marginLeft: 24,
        width: "90%",
        justifyContent: "center",
        padding: 15,
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
        marginTop: 10,
        fontWeight: 'bold',
        fontSize: 18,
        color: 'brown'
    },
    image: {
        flex:1,
    }
});