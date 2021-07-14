import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";
import { ModalCustom } from "../../../components/modal";
import { Ionicons } from "@expo/vector-icons";
import { Atualizar } from "../atualizar";
import { obterProduto } from "../../../service/api.produto";

export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    obterTodosOsProduto();
  }, []);

  //Função para chamar os produtos na api
  const obterTodosOsProduto = async () => {
    const { data } = await obterProduto();
    setProdutos(data);
  };

  
  return (
    <View>
      <Text>Ola</Text>
      {produtos.map((p) => (
        <View key={p.id}>
          <Text>{p.nome}</Text>
          <ModalCustom
            fechar={"batata"}
            icone={<Ionicons name="md-paper-plane" size={35} color="#0ca6ee" />}
          >
            <Atualizar produto={p} />
          </ModalCustom>
        </View>
      ))}
    </View>
  );
}
