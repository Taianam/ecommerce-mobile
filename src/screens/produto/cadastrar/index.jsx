
import React, { useEffect, useState, useRef } from "react";
import { View, TextInput, TouchableOpacity, Text, Image, ImageBackground } from "react-native";
import { Data } from "../../../components/data";
import { Picker } from "@react-native-picker/picker";
import { style } from "./style";
import logoCadastrar from "../../../assets/cadastrodeprodutos.png"
import api from "../../../service/api";



export function Cadastrar() {
  const [nome, setNome] = useState();
  const [descricao, setDescricao] = useState();
  const [imagem, setImagem] = useState();
  const [estoque, setEstoque] = useState();
  const [preco, setPreco] = useState();
  const [dataCadastro, setDataCadastro] = useState();
  const [categoria, setCategoria] = useState([]);
  const [categoriaId, setCategoriaId] = useState([]);

  // Função que recebe uma data do compenente DATA e inseri no estado.
  function inserirDataCadastro(data) {
    setDataCadastro(data);
  }

  // Função que vai cadastrar os produtos
  const cadastrarProduto = async () => {
    try {
      const novoProduto = {
        nome: nome,
        descricao: descricao,
        imagem: imagem,
        estoque: estoque,
        dataDeCadastro: dataCadastro,
        preco: preco,
      };

      await api.post(`produtos/${categoriaId}`, novoProduto);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obterCategorias();
  }, []);
  //Função que busca as categorias
  const obterCategorias = async () => {
    try {
      const { data } = await api.get("categorias");
      console.log(data);
      setCategoria(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.fundo}>
      <Image style={style.imagem} source={logoCadastrar}/>
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
          <Picker.Item  key ={c.id} label={c.nome} value={c.id} />
        ))}
      </Picker>
      <Data inserirDataCadastro={inserirDataCadastro} />
      <TouchableOpacity style={style.button} onPress={cadastrarProduto}>
        <Text>Cadastrar</Text>
      </TouchableOpacity>
    </View>
  );
}
