import React, { useState } from "react";
import { style } from "./style";
import { usarProvedorDeAutentificacao } from "../../hooks/autenticar";
import { FontAwesome5 } from '@expo/vector-icons';
import {View,
        Text,
        TouchableOpacity,
        TextInput,
        Alert,
        ActivityIndicator,
        ImageBackground} from "react-native";

const image = { uri: 'https://i.ibb.co/dtZztXq/1-1.jpg'}
export function Login() {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [loading, setLoading] = useState(false);

  const { efetuarLogin } = usarProvedorDeAutentificacao();

  // Função para limpar os campos após a submissão
  const limparCampos= ()=> {
    setEmail("");
    setSenha("");
  }

  // Função para validar os inputs
  const checarInputs = () => {

    if (email === undefined || email === '') {
      Alert.alert("Email Obrigatorio", "O campo email está vazio");
      return true;
    }

    if (senha === undefined || senha === '') {
      Alert.alert("Senha Obrigatoria", "O campo senha está vazio");
      return true;
    }
  };

  // Função que vai chamar a função de login no Autenficar.jsx
  const chamarEfetuarLogin = async () => {
    try {
      setLoading(true);
      
      if(checarInputs()){
        return
      }
      await efetuarLogin({email, senha});

    } catch (error) {
      Alert.alert("Email ou senha invalido!", "Usuario não cadastrado!");
    }finally{
      limparCampos();
      setLoading(false)
    }
  };

  return (
    <View style={style.container}>
      <ImageBackground source={image} style={style.image}>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={style.input}
        placeholder="E-mail"
      />
      <TextInput
        onChangeText={setSenha}
        value={senha}
        style={style.inputDois}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={chamarEfetuarLogin}>
        {!loading ? (
          <Text style={style.botao}> Entrar</Text>
        ) : (
          <ActivityIndicator size="small" color="#e5ff00" />
        )}
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={style.botaoDois}>Cadastre-se
        <FontAwesome5 name="candy-cane" size={24} color="brown"/>
        </Text>
      </TouchableOpacity>
      </View>
      <TouchableOpacity>
        <Text style={style.forget}>Esqueceu sua senha? Clica aqui </Text>
      </TouchableOpacity>
      </ImageBackground>
    </View>
  );
}
