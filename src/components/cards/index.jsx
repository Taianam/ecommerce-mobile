import React from "react";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { style } from "../cards/style";
import { usarControleCarrinho } from "../../hooks/controleCarrinho";

export function Cards(props) {
    const { adicionarProdutoPorId } = usarControleCarrinho();
    const { id, nome, descricao, preco, estoque, imagem } = props.produto;

    return (
        <View style={style.cont}>
            <View style={style.conteinerUm}>
                <Image source={{ uri: `${imagem}` }} style={style.imagem} />
            </View>
            <View style={style.conteinerDois}>
                <Text>{nome}</Text>
                <Text>Descrição:{descricao}</Text>
                <Text>Valor: {preco} </Text>
                <TouchableOpacity
                    onPress={() => adicionarProdutoPorId(id)}
                    style={style.botao}
                >
                    <Text> Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}