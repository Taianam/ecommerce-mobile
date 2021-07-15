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
    botao: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: "#FFC0CB",
        marginLeft: 18,
        width: "90%",
        borderRadius: 30,
        borderWidth: 4,
        borderColor: "#A0522D",
        fontSize: 25,
        textAlign: "center",
        paddingLeft: 4,
        paddingTop: 2,
        paddingRight: 10,
        marginBottom: 2
    },
    botaoDois: {
        flexDirection: 'row',
        marginTop: 30,
        backgroundColor: "white",
        marginLeft: 55,
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