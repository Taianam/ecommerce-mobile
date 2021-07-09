import React, { useState } from "react";
import { style } from "./style";
import { usarProvedorDeAutentificacao } from "../../hooks/autenticar";
import {View,
        Text,
        TouchableOpacity,
        TextInput,
        Alert,
        ActivityIndicator} from "react-native";

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
    <View>
      <TextInput
        value={email}
        onChangeText={setEmail}
        style={style.input}
        placeholder="E-mail"
      />
      <TextInput
        onChangeText={setSenha}
        value={senha}
        style={style.input}
        placeholder="Senha"
        secureTextEntry={true}
      />
      <TouchableOpacity onPress={chamarEfetuarLogin} style={style.botao}>
        {!loading ? (
          <Text> Entrar</Text>
        ) : (
          <ActivityIndicator size="small" color="#e5ff00" />
        )}
      </TouchableOpacity>
    </View>
  );
}
