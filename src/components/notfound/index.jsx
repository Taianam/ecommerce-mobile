import React from 'react';
import { View, Text } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { style } from "./styles";

export function NotFound(){
    return(
        <View style={style.container}>
            <FontAwesome name="hand-stop-o" size={50} color="red" />
            <Text style={style.titulo}> Ops ! Nenhum resultado encontrado </Text>
        </View>
    )
}