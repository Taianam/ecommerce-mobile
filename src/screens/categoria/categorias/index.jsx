import React from "react";

import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { ModalCustom } from "../../../components/modal";
import { EvilIcons } from "@expo/vector-icons";

import styles from "./style";
import api from "../../../service/api.categoria";

import Atualizar from "../atualizar";
import Cadastrar from "../cadastrar";

function Categorias() {
	const [categorias, setCategorias] = React.useState([]);

	React.useEffect(() => {
		API();
	}, []);

	const API = () => {
		api.obterCategorias().then((response) => {
			setCategorias(response);
		});
	};

	return (
		<View style={styles.container}>
			<ScrollView>
				<View>
					<TouchableOpacity style={styles.nova}>
						<View>
							<ModalCustom
								fechar={"Cancelar"}
								icone={<Text>Nova Categoria</Text>}
							>
								<Cadastrar atualizar={API} />
							</ModalCustom>
						</View>
					</TouchableOpacity>
					{categorias.map((c) => {
						return (
							<View key={c.id} style={styles.itens}>
								<Text style={styles.nome}>{c.nome}</Text>
								<Text style={styles.descricao}>{c.descricao}</Text>

								<ModalCustom
									fechar={"Cancelar"}
									icone={<EvilIcons name="pencil" size={24} color="black" />}
								>
									<Atualizar atualizar={API} categoria={c} />
								</ModalCustom>
							</View>
						);
					})}
				</View>
			</ScrollView>
		</View>
	);
}

export default Categorias;
