import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../hooks/controleCarrinho";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Cards(props) {

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
          onPress={() => props.removerProduto(id)}
          style={style.botao}
        >
     <FontAwesome name="trash" size={24} color="black" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
