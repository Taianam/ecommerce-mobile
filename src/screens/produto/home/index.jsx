import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import api  from "../../../service/api";

export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    obterProduto();
  }, []);

  //Função para chamar os produtos na api
  const obterProduto = async () => {
    try {
      const { data } = await api.get("produtos");
      setProdutos(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <View>
      <Text>Ola</Text>
      {produtos.map((p) => (
        <View key={p.id}>
          <Text>{p.nome}</Text>
        </View>
      ))}
    </View>
  );
}
