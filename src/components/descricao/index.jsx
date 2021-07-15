import React from "react";
import { View, Text, Image } from "react-native";
import { style } from "./styles";

export function Descricao({ produto }) {
    console.log(produto);
    return (
        <View>
            <Image source={{ uri: `${produto.imagem}` }} style={style.imagem} />
            <View style={style.detalhes}>
                <Text style={style.nome}> Nome: {produto.nome} </Text>
                <Text style={style.descricao}>
                    <Text style={{fontWeight: 'bold'}}>Descrição:{"\n"}</Text>
                    {produto.descricao}{" "}
                </Text>
                <Text style={style.categoria}>
                    Categoria: {produto.categoria.nome}
                </Text>
                <Text style={style.categoriaDetalhe}>
                    Detalhes: {produto.categoria.descricao} 
                </Text>
            </View>
        </View>
    );
}
