import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../context/controleCarrinho";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ModalCustom } from "../../modal";
import { Descricao } from "../../descricao";
import { AntDesign } from '@expo/vector-icons'

export function Cards(props) {
    const { adicionarProdutoPorId } = usarControleCarrinho();
    const { id, nome, descricao, preco, estoque, imagem } = props.produto;

    return (
        <View style={style.cont}>
            <View style={style.conteinerUm}>
                <ModalCustom
                    fechar={<AntDesign name="closecircle" size={38} />}
                    icone={
                        <Image
                            source={{ uri: `${imagem}` }}
                            style={style.imagem}
                        />
                    }
                >
                    <Descricao produto={props.produto}/>
                </ModalCustom>
            </View>
            <View style={style.conteinerDois}>
                <Text style={style.font}>{nome}</Text>
                <Text>Valor: R$ {preco} </Text>
                <TouchableOpacity
                    onPress={() => adicionarProdutoPorId(id)}
                    style={style.botao}
                >
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
