import React, { useEffect, useState } from "react";
import { obterProduto, deletarProduto } from "../../../service/api.produto";
import { TouchableOpacity } from "react-native-gesture-handler";
import { usarProvedorDeAutentificacao } from "../../../context/autenticar";
import { style } from "./styles";
import { EvilIcons, Feather } from "@expo/vector-icons";
import { CardsProdutos } from "../../../components/cards/cardsProdutos";
import { useToast, Spinner } from "native-base";
import {
  View,
  Text,
  ScrollView,
  ImageBackground,
  Image,
  Alert,
} from "react-native";
import { ModalCustom } from "../../../components/modal";
import { Cadastrar } from "../cadastrar";
import Produto from "../../../assets/produtos.png";

export function Home() {
  const [produtos, setProdutos] = useState([]);
  const [loading, setLoading] = useState(false);
  const { efetuarLogoff } = usarProvedorDeAutentificacao();
  const toast = useToast();

  useEffect(() => {
    obterTodosOsProduto();
  }, []);

  //Função para chamar os produtos na api
  const obterTodosOsProduto = async () => {
    setLoading(true);
    const data = await obterProduto();
    setProdutos(data);
    setLoading(false);
  };

  // Função que deleta um produto por ID e atualiza os produtos em tela
  const deletarProdutoPorId = async (id) => {
    Alert.alert("Deletar Produto", "Deseja deletar esse produto?", [
      {
        text: "Cancelar",
      },
      {
        text: "Sim",
        onPress: async () => {
          await deletarProduto(id), setLoading(true);
          toast.show({
            title: "Produto deletado com sucesso",
            status: "success",
          });
          setLoading(false);
          obterTodosOsProduto();
        },
      },
    ]);
  };

  return (
    <ImageBackground
      source={require("../../../assets/BcgDoces.jpeg")}
      style={style.image}
    >
      <Image source={Produto} style={style.img} />

      <View>
        {loading ? (
          <Spinner size="lg" />
        ) : (
          <>
            <View style={style.container}>
              <ModalCustom
                fechar={"Fechar"}
                icone={
                  <View style={style.button}>
                    <Text> Cadastrar produto </Text>
                    <EvilIcons name="pencil" size={24} color="black" />
                  </View>
                }
              >
                <Cadastrar />
              </ModalCustom>

              <TouchableOpacity
                style={style.buttonSair}
                onPress={() => efetuarLogoff()}
              >
                <Text style={style.texto}>
                  {" "}
                  Sair <Feather name="log-out" size={15} color="white" />{" "}
                </Text>
              </TouchableOpacity>
            </View>

            <ScrollView>
              {produtos.map((p) => (
                <CardsProdutos
                  key={p.id}
                  produto={p}
                  obterTodosOsProduto={obterTodosOsProduto}
                  deletarProdutoPorId={deletarProdutoPorId}
                />
              ))}
            </ScrollView>
          </>
        )}
      </View>
    </ImageBackground>
  );
}
