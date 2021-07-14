import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../hooks/controleCarrinho";
import { View, 
         Text, 
         Image, 
         TouchableOpacity } from "react-native";

export function Cards(props) {

    const { adicionarProdutoPorId } = usarControleCarrinho();
    const { id, nome, descricao, preco, estoque, imagem } = props.produto;

    return (
        <View style={style.cont}>
            <View style={style.conteinerUm}>
                <Image source={{ uri: `${imagem}` }} style={style.imagem} />
            </View>
            <View style={style.conteinerDois}>
                <Text style={style.font}>{nome}</Text>
                <Text>Valor: R$ {preco} </Text>
                <TouchableOpacity
                    onPress={() => adicionarProdutoPorId(id)}
                    style={style.botao}
                >
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
