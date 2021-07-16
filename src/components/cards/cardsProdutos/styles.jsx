import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    card:{
        marginVertical: 8,
        flexDirection: 'row',
        backgroundColor: '#ddd',
        paddingVertical: 5,
        paddingHorizontal: 10,
        justifyContent: 'space-between'
    },
    descricao:{
        flexDirection: 'row',
        alignItems: 'center'
    },
    tituloID:{
        fontSize: 16,
    },
    titulo:{
        fontSize: 20,
        marginLeft: 10
    }, 
    acao:{
        flexDirection: 'row'
    }
})