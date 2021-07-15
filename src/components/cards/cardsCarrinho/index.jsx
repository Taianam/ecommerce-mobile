import React from "react";
import { style } from "./style";
import { usarControleCarrinho } from "../../../context/controleCarrinho";
import { View, Text, Image, TouchableOpacity } from "react-native";
import { FontAwesome } from "@expo/vector-icons";

export function Cards(props) {
	const { id, nome, descricao, preco, estoque, imagem } = props.produto;

	return (
		<View style={style.cont}>
			<View style={style.conteinerUm}>
				<Image source={{ uri: `${imagem}` }} style={style.imagem} />
			</View>

			<View style={style.conteinerDois}>
				<View style={style.conteinerTextos}>
					<Text style={style.nome}>{nome}</Text>
				</View>

				<View style={style.conteinerDireita}>
					<TouchableOpacity
						onPress={() => props.removerProduto(id)}
						style={style.botao}
					>
						<FontAwesome name="trash" size={24} color="#A0522D" />
					</TouchableOpacity>

					<Text style={style.preco}> R${preco} </Text>
				</View>
			</View>
		</View>
	);
}
