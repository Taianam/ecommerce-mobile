import React from "react";

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ImageBackground,
	Image,
} from "react-native";

import styles from "./style";
import apiCategoria from "../../../service/api.categoria";

const fundo = { uri: "https://i.ibb.co/S5WCBtc/2.jpg" };

import logoAtualizar from "../../../assets/cadastrarcategoria.png";

function cadastrarCategoria({ atualizar }) {
	const [nome, setNome] = React.useState("");
	const [descricao, setDescricao] = React.useState("");

	const hendleCadastrar = () => {
		const novaCategoria = {
			nome,
			descricao,
		};

		apiCategoria.cadastrarCategoria(novaCategoria).then((response) => {
			if (response.status === 201) {
				alert("Categoria cadastrada com sucesso");
				setDescricao("");
				setNome("");
				atualizar(true);
			} else {
				alert("Algo deu errado ☹", "Tente novamente mais tarde");
			}
		});
	};

	return (
		<View style={styles.container}>
			<ImageBackground
				source={require("../../../assets/BcgDoces.jpeg")}
				style={styles.image}
			>
				<Image style={styles.imagem} source={logoAtualizar} />
				<View style={styles.form}>
					<TextInput
						style={styles.imput}
						value={nome}
						onChangeText={setNome}
						placeholder="Nome"
					/>

					<TextInput
						style={styles.imput}
						value={descricao}
						onChangeText={setDescricao}
						placeholder="Descrição"
					/>

					<TouchableOpacity
						style={styles.button}
						title="Cadastrar"
						activeOpacity={0.9}
						onPress={hendleCadastrar}
					>
						<Text style={styles.title}>Cadastrar</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

export default cadastrarCategoria;
