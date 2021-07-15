import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Interface from "../../assets/Interface.png";
import { Cards } from "../../components/cards/cardsHome";
import { style } from "./style";
import { View, Text, Image, ScrollView, TextInput } from "react-native";
import { NotFound } from "../../components/notfound";

export function Home() {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);

    useEffect(() => {
        obterProduto();
    }, []);
      
    //Função para chamar os produtos na api
    const obterProduto = async () => {
        try {
            const { data } = await api.get("produtos");
            setProdutos(data);
            setProdutosFiltrados(data);
        } catch (error) {
            console.log(error);
        }
    };

    // Função que vai filtrar os produtos
    const filtrarProdutos = (value) => {
        const resultado = produtos.filter((produto) =>
            produto.nome.toLowerCase().includes(value.toLowerCase())
        );
        if (resultado.length > 0) {
            setProdutosFiltrados(resultado);
        } else {
            setProdutosFiltrados([]);
        }

        if (value === "") setProdutosFiltrados(produtos);
    };

    return (
        <View style={style.fundo}>
            <Image source={Interface} style={style.img} />
            <ScrollView>
                <Text style={style.titulo}>BEM VINDO!</Text>
                <TextInput
                    style={style.input}
                    placeholder="Pesquise aqui"
                    onChangeText={filtrarProdutos}
                />
                {produtosFiltrados.length > 0 ? (
                    produtosFiltrados.map((p) => (
                        <View key={p.id}>
                            <Cards produto={p} />
                        </View>
                    ))
                ) : (
                    <NotFound />
                )}
            </ScrollView>
        </View>
    );
}
