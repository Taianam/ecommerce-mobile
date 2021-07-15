import { StyleSheet } from "react-native";

export const style = StyleSheet.create({
    container:{
        flex:1,
    },

    cry: {
        width:300,
        height:300,
        alignItems: 'center',
        justifyContent: 'center',
    },
     titulo:{
         fontSize: 24,
         fontWeight: 'bold',
         textAlign: 'center'
     },
     fundo:{
         flex:1,
         opacity:0.9
     },
     texto:{
         marginBottom:30,
         fontSize:25,
         alignItems: 'center',
         justifyContent: 'center',
         fontWeight: 'bold'
     }
});
