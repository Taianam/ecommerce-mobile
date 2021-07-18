import React from "react";
import { ModalCustom } from "../../modal";
import { EvilIcons } from "@expo/vector-icons";
import { Atualizar } from "../../../screens/produto/atualizar";
import { View, Text, ScrollView } from "react-native";
import { style } from "./styles";

export function CardsProdutos({
    produto,
    obterTodosOsProduto,
    deletarProdutoPorId,
}) {
    return (
        <ScrollView>
        <View style={style.card}>
            <View style={style.descricao}>
                <Text style={style.tituloID}>{produto.id}</Text>
                <Text style={style.titulo}>{produto.nome}</Text>
            </View>
            <View style={style.acao}>
                <ModalCustom
                    fechar={"Cancelar"}
                    icone={<EvilIcons name="pencil" size={28} color="black" />}
                >
                    <Atualizar
                        produto={produto}
                        atualizarHomeProduto={obterTodosOsProduto}
                    />
                </ModalCustom>
                <EvilIcons
                    name="trash"
                    size={28}
                    color="black"
                    onPress={() => deletarProdutoPorId(produto.id)}
                />
            </View>
        </View>
        </ScrollView>
    );
}
