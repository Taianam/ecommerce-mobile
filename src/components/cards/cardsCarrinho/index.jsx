import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../context/controleCarrinho";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Cards(props) {
	const { id, nome, descricao, preco, estoque, imagem } = props.produto;
	const { adicionarProdutoPorId } = usarControleCarrinho();

    // Função que filtar a quantidade de produto presente no contexto
    const filterQuantidade = () => {
        const resultado = props.produtosIds.filter(
            (idProduto) => idProduto === id
        );
        return resultado.length;
    };

    return (
        <View style={style.cont}>
            <View>
                <Image source={{ uri: `${imagem}` }} style={style.imagem} />
            </View>

            <View style={style.conteinerDois}>
                <View style={style.conteinerTextos}>
                    <Text style={style.nome}>{nome}</Text>
                    <TouchableOpacity
                       
                        style={style.botao}
                    >
                        <FontAwesome name="trash" size={24} color="#A0522D" />
                    </TouchableOpacity>
                </View>
                <View>
                    <Text> Quantidade : {filterQuantidade()}</Text>
                </View>
                <View style={style.conteinerDireita}>
                    <View style={style.acao}>
                       <TouchableOpacity>
							<FontAwesome name="android" size={24} />
					   </TouchableOpacity>
					   <Text> {filterQuantidade()} </Text>
					   <TouchableOpacity  onPress={() => props.removerProduto(id)}>
					   		<FontAwesome name="remove" size={24} />
					   </TouchableOpacity>
                    </View>

                    <Text style={style.preco}>
                        R${preco * filterQuantidade()}
                    </Text>
                </View>
            </View>
        </View>
    );
}
