import React, { useEffect, useState } from "react";
import { usarControleCarrinho } from "../../hooks/controleCarrinho";
import { Cards } from "../../components/cards/cardsHome";
import api from "../../service/api";
import { View } from "react-native";

export function Carrinho() {
    const [produtos, setProdutos] = useState([]);

    const { produtosIds } = usarControleCarrinho();

    useEffect(() => {
        obterProduto();
    }, [produtosIds]);

    const obterProduto = async () => {
        try {
            if (produtosIds.length == 0 || produtosIds === undefined) {
                return;
            }

            const produtoFiltrado = [];
            const { data } = await api.get("produtos");

            // Remove todo id repetido dentro do array
            const novoArrayDeIds = produtosIds.filter((index, id) => {
                return produtosIds.indexOf(index) === id;
            });

            //Filtra os produtos pelo id
            novoArrayDeIds.forEach((id) => {
                data.forEach((produto) => {
                    if (produto.id === id) {
                        produtoFiltrado.push(produto);
                    }
                });
            });

            setProdutos(produtoFiltrado);
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <View>
            {produtos.map((p) => (
                <View key={p.id}>
                    <Cards produto={p} />
                </View>
            ))}
        </View>
    );
}
