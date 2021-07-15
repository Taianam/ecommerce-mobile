import React from "react";

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ImageBackground,
} from "react-native";

import apiCategoria from "../../../service/api.categoria";
import styles from "./style";

function AtualizarCategoria({ categoria, atualizar }) {
	const [nome, setNome] = React.useState("");
	const [descricao, setDescricao] = React.useState("");

	const hendleCadastrar = () => {
		const novaCategoria = {
			nome,
			descricao,
		};

		apiCategoria
			.atualizarCategiria(categoria.id, novaCategoria)
			.then((response) => {
				if (response != null) {
					alert("Categoria atualizada com sucesso");
					setDescricao("");
					setNome("");
					atualizar(true);
				} else {
					console.log(novaCategoria, response);
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
				<View style={styles.form}>
					<Text style={styles.titulo}>Atualização de categoria</Text>
					<TextInput
						style={styles.imput}
						value={nome}
						onChangeText={setNome}
						placeholder={categoria.nome}
					/>

					<TextInput
						style={styles.imput}
						value={descricao}
						onChangeText={setDescricao}
						placeholder={categoria.descricao}
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

export default AtualizarCategoria;
