import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'
import { style } from '../cards/style'


export function Cards(props) {
    const {id, nome, descricao, preco, estoque, imagem } = props.produto;
    return (

        <View style={style.cont}>
            <View style={style.conteinerUm}>
            <Image source={{uri:`${imagem}`}} style={style.imagem} />
                
            </View>
            <View style={style.conteinerDois}>
                <Text>{nome}</Text>
                <Text>Descrição:{descricao}</Text>
                <Text>Valor: {preco} </Text>
            <TouchableOpacity style={style.botao}>
                <Text> Comprar</Text>
            </TouchableOpacity>
            </View>
        </View>

    )


}