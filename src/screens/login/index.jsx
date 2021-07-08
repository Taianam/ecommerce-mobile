import React, { useState } from "react";
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Alert,
  ActivityIndicator,
} from "react-native";
import { style } from "./style";
import { useAuth } from "../../hooks/auth";

export function Login() {
  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [loading, setLoading] = useState(false);

  const { fazerLogin } = useAuth();

  const limparCampos=()=>{
    setEmail("");
    setSenha("");
  }
  const checarTexto = () => {
    if (email === undefined || email === '') {
      Alert.alert("Email Obrigatorio", "O campo email está vazio");
      return true;
    }

    if (senha === undefined || senha === '') {
      Alert.alert("Senha Obrigatoria", "O campo senha está vazio");
      return true;
    }
  };

  const singIn = async () => {
    try {
      setLoading(true);

      if(checarTexto()){
        return
      }

      let dadosParaLogin = {
        email: email,
        senha: senha,
      };
      await fazerLogin(dadosParaLogin);
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
      <TouchableOpacity onPress={singIn} style={style.botao}>
        {!loading ? (
          <Text> Entrar</Text>
        ) : (
          <ActivityIndicator size="small" color="#e5ff00" />
        )}
      </TouchableOpacity>
    </View>
  );
}
