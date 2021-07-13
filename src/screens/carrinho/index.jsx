import React, { useEffect, useState } from "react";
import { usarControleCarrinho } from "../../hooks/controleCarrinho";
import { Cards } from "../../components/cards/cardsCarrinho";
import api from "../../service/api";
import { View, Alert } from "react-native";

export function Carrinho() {
  const [produtos, setProdutos] = useState([]);

  const { produtosIds, removerProdutoPorId } = usarControleCarrinho();

  useEffect(() => {
    obterProduto(produtosIds);
  }, [produtosIds]);

  const obterProduto = async (ids) => {
    console.log(ids);
    try {
      if (ids.length == 0 || ids === undefined) {
        setProdutos([]);
        return;
      }

      const produtoFiltrado = [];
      const { data } = await api.get("produtos");

      // Remove todo id repetido dentro do array
      const novoArrayDeIds = ids.filter((index, id) => {
        return ids.indexOf(index) === id;
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

  // Função que vai remover o produto E atualizar a tela
  const removerProduto = (id) => {
    Alert.alert("Remover do Carrinho", "Deseja remover o item do seu carrinho?", [
      {
        text: "Cancelar",
        style: "cancel",
      },
      {
        text: "Sim",
        onPress: async () => obterProduto(await removerProdutoPorId(id)),
      },
    ]);
  };

  return (
    <View>
      {produtos.map((p) => (
        <View key={p.id}>
          <Cards produto={p} removerProduto={removerProduto} />
        </View>
      ))}
    </View>
  );
}
