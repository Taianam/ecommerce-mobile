import { StyleSheet } from "react-native";

const styleLight = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#ecaba7",
        paddingBottom: 10
    },
    titulo: {
        color: "#ffff",
        textAlign: "center",
        fontSize: 30,
    },
    img: {
        width: "100%",
        height: "30%",
        
    },
    input: {
        paddingHorizontal: 10,
        borderWidth: 1,
        borderColor: '#fff',
        borderRadius: 5,
        marginHorizontal: 10,
        marginBottom: 2
    }
});

const styleDark = StyleSheet.create({
    fundo: {
        flex: 1,
        backgroundColor: "#a7ecb6",
        paddingBottom: 10
    },
    titulo: {
        color: "#ffff",
        textAlign: "center",
        fontSize: 30,
    },
    img: {
        width: "100%",
        height: "12%",
    },
    input: {
        paddingHorizontal: 10,
    }
});


export { styleDark, styleLight}
