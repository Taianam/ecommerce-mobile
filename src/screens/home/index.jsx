import React, { useEffect, useState } from "react";
import api from "../../service/api";
import Interface from "../../assets/Interface.png";
import { Cards } from "../../components/cards/cardsHome";
import { styleLight, styleDark } from "./style";
import { NotFound } from "../../components/notfound";
import { usarDarkModeContexto } from "../../context/darkMode";
import { Spinner } from "native-base";
import { View, Text, Image, ScrollView, TextInput } from "react-native";

export function Home() {
    const [produtos, setProdutos] = useState([]);
    const [produtosFiltrados, setProdutosFiltrados] = useState([]);
    const [loading, setLoading] = useState(false);

    const { dark } = usarDarkModeContexto();
    const style = dark ? styleDark : styleLight;

    useEffect(() => {
        obterProduto();
    }, []);

    //Função para chamar os produtos na api
    const obterProduto = async () => {
        try {
            setLoading(true);
            const { data } = await api.get("produtos");
            setProdutos(data);
            setProdutosFiltrados(data);
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
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
        <ScrollView  >
            <View style={style.fundo} >
                {loading ? (
                    <Spinner size="lg" />
                ) : (
                    <View>
                        <Image source={Interface} style={style.img} resizeMode="stretch" />
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
                    </View>
                )}
            </View>
        </ScrollView>
    );
}
