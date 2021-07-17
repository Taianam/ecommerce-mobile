import React, { useEffect, useState } from "react";
import { obterProduto, deletarProduto } from "../../../service/api.produto";
import { TouchableOpacity } from "react-native-gesture-handler";
import { usarProvedorDeAutentificacao } from "../../../context/autenticar";
import { style } from "./styles";
import { EvilIcons } from "@expo/vector-icons";
import { CardsProdutos } from "../../../components/cards/cardsProdutos";
import { useToast, Spinner } from "native-base";
import { View, Text, ScrollView } from "react-native";
import { ModalCustom } from "../../../components/modal";
import { Cadastrar } from "../cadastrar";

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
    setLoading(true);
    await deletarProduto(id);
    toast.show({
      title: "Produto deletado com sucesso",
      status: "success",
    });
    setLoading(false);
    obterTodosOsProduto();
  };

  return (
    <ScrollView>
      <View>
        {loading ? (
          <Spinner size="lg" />
        ) : (
          <>
            <TouchableOpacity onPress={() => efetuarLogoff()}>
              <Text> Sair </Text>
            </TouchableOpacity>

            <ModalCustom
              fechar={"Fechar"}
              icone={
                <View style={style.button}>
                  <Text> Novo produto </Text>
                  <EvilIcons name="pencil" size={28} color="black" />
                </View>
              }
            >
              <Cadastrar />
            </ModalCustom>

            {produtos.map((p) => (
              <CardsProdutos
                key={p.id}
                produto={p}
                obterTodosOsProduto={obterTodosOsProduto}
                deletarProdutoPorId={deletarProdutoPorId}
              />
            ))}
          </>
        )}
      </View>
    </ScrollView>
  );
}
