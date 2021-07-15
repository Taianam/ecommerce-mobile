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
import api  from "../../../service/api";
import { Ionicons } from "@expo/vector-icons";
import { Atualizar } from "../atualizar";

export function Home() {
  const [produtos, setProdutos] = useState([]);

  useEffect(() => {
    obterProduto();
  }, []);

  //Função para chamar os produtos na api
  const obterProduto = async () => {
    try {
      console.log('data')
      const { data } = await api.get("produtos");
      console.log(data)
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
          <ModalCustom 
            fechar={'batata'}
            icone={<Ionicons name="md-paper-plane" size={35} color="#0ca6ee" />}> 
            <Atualizar produto={p}/>
          </ModalCustom>
        </View>
      ))}
    </View>
  );
}
