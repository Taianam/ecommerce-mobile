import React from "react";

import {
	View,
	Text,
	TouchableOpacity,
	TextInput,
	ImageBackground,
	Image,
} from "react-native";

import apiCategoria from "../../../service/api.categoria";
import styles from "./style";
import logoAtualizar from "../../../assets/atualizarfita.png";

function AtualizarCategoria({ categoria, atualizar }) {
	const [nome, setNome] = React.useState(categoria.nome);
	const [descricao, setDescricao] = React.useState(categoria.descricao);

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
					atualizar();
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
				<Image style={styles.imagem} source={logoAtualizar} />
				<View style={styles.form}>
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
						<Text style={styles.title}>Atualizar</Text>
					</TouchableOpacity>
				</View>
			</ImageBackground>
		</View>
	);
}

export default AtualizarCategoria;
