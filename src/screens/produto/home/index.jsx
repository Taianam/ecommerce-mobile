import React, { useEffect, useState } from "react";
import { View, Text, ScrollView } from "react-native";
import { ModalCustom } from "../../../components/modal";
import { Ionicons, EvilIcons } from "@expo/vector-icons";
import { Atualizar } from "../atualizar";
import { obterProduto, atualizarProduto } from "../../../service/api.produto";

export default function Home() {
	const [produtos, setProdutos] = useState([]);

	useEffect(() => {
		obterTodosOsProduto();
	}, []);

	//Função para chamar os produtos na api
	const obterTodosOsProduto = async () => {
		const data = await obterProduto();
		setProdutos(data);
	};

	return (
		<View>
			<Text>Ola</Text>
			<ScrollView>
				{produtos.map((p) => (
					<View key={p.id}>
						<Text>{p.nome}</Text>
						<ModalCustom
							fechar={"Cancelar"}
							icone={<EvilIcons name="pencil" size={24} color="black" />}
						>
							<Atualizar
								produto={p}
								atualizarHomeProduto={obterTodosOsProduto}
							/>
						</ModalCustom>
					</View>
				))}
			</ScrollView>
		</View>
	);
}
