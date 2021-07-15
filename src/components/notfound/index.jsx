import React from 'react';
import { View, Text, Image, ImageBackground } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { style } from "./styles";

const candycrying = { uri: "https://i.ibb.co/gSwr8YQ/Inside-Out.png" }
const fundo = { uri: "https://i.ibb.co/wrPprnF/2797738.jpg"}
export function NotFound(){
    return(
        <View style={style.container}>
            <ImageBackground source={fundo} style={style.fundo}>
            <View>
            <Text style={style.texto}>Ops! Nenhum doce encontrado. 
                <FontAwesome5 name="sad-cry" size={24} color="grey" />
                 </Text>
            <Image source={candycrying} style={style.cry}/>
            </View>
            
            </ImageBackground>
        </View>
    )
}