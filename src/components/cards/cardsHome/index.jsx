import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../context/controleCarrinho";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { ModalCustom } from "../../modal";
import { useToast } from "native-base";
import { Descricao } from "../../descricao";
import { AntDesign } from '@expo/vector-icons'

export function Cards(props) {
    const { adicionarProdutoPorId } = usarControleCarrinho();
    const toast = useToast();
    const { id, nome, descricao, preco, estoque, imagem } = props.produto;

    const adicionarProduto = (id)=>{
        adicionarProdutoPorId(id);
        toast.show({
            title: 'Produto adicionado no carrinho',
            status: 'success'
        })
    }

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
                    onPress={() => adicionarProduto(id)}
                    style={style.botao}
                >
                    <Text>Comprar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}
