import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  ScrollView,
} from "react-native";
import api from "../../../service/api";
import { Data } from "../../../components/data";
import { Picker } from "@react-native-picker/picker";
import logoAtualizar from "../../../assets/atualizarfita.png";
import { atualizarProduto } from "../../../service/api.produto";
import { style } from "./style";

export function Atualizar({ produto, atualizarHomeProduto }) {
  const [nome, setNome] = useState(produto.nome);
  const [descricao, setDescricao] = useState(produto.descricao);
  const [imagem, setImagem] = useState(produto.imagem);
  const [estoque, setEstoque] = useState(String(produto.estoque));
  const [preco, setPreco] = useState(String(produto.preco));
  const [dataCadastro, setDataCadastro] = useState();
  const [categoria, setCategoria] = useState([]);
  const [categoriaId, setCategoriaId] = useState([]);

  // Função que recebe uma data do compenente DATA e inseri no estado.
  function inserirDataCadastro(data) {
    setDataCadastro(data);
  }

  // Função que atualiza um produto na API
  const atualizarUmProduto = async () => {
    const novoProduto = {
      nome: nome,
      descricao: descricao,
      imagem: imagem,
      estoque: estoque,
      dataDeCadastro: dataCadastro,
      preco: preco,
    };

    const data = await atualizarProduto(produto.id, novoProduto);
    atualizarHomeProduto();
  };

  useEffect(() => {
    obterCategorias();
  }, []);
  //Função que busca as categorias
  const obterCategorias = async () => {
    try {
      const { data } = await api.get("categorias");
      setCategoria(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ScrollView>
      <View style={style.conteiner}>
        <Image style={style.imagem} source={logoAtualizar} />
        <TextInput
          style={style.imput}
          value={nome}
          onChangeText={setNome}
          placeholder="Nome"
        />
        <TextInput
          style={style.imput}
          value={descricao}
          onChangeText={setDescricao}
          placeholder="Descrição"
        />
        <TextInput
          style={style.imput}
          value={imagem}
          onChangeText={setImagem}
          placeholder="Imagem"
        />
        <TextInput
          style={style.imput}
          value={estoque}
          onChangeText={setEstoque}
          placeholder="Estoque"
        />
        <TextInput
          style={style.imput}
          value={preco}
          onChangeText={setPreco}
          placeholder="Preço"
        />
        <Picker
          style={style.imput}
          selectedValue={categoriaId}
          onValueChange={(itemValue) => setCategoriaId(itemValue)}
        >
          {categoria.map((c) => (
            <Picker.Item key={c.id} label={c.nome} value={c.id} />
          ))}
        </Picker>
        <Data inserirDataCadastro={inserirDataCadastro} />
        <TouchableOpacity style={style.button} onPress={atualizarUmProduto}>
          <Text>Atualizar</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}
