import React, { useState } from "react";
import { style } from "./style";
import { usarProvedorDeAutentificacao } from "../../context/autenticar";
import { FontAwesome5 } from '@expo/vector-icons';
import {View,
        Text,
        TouchableOpacity,
        TextInput,
        Alert,
        ActivityIndicator,
        Image,
        ImageBackground} from "react-native";

const image2 = { uri: 'https://i.ibb.co/djpbGVC/logo1.png'}
const fundo = { uri: 'https://i.ibb.co/3Mym9y9/1-2.jpg'}

export function Login({navigation}) {

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
      <ImageBackground source={fundo} style={style.fundo}>
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
      <View><TouchableOpacity onPress={() => {navigation.navigate('RecuperarSenha')}}>
        <Text style={style.forget}>Esqueceu sua senha? Clica aqui
         </Text>
      </TouchableOpacity>
      </View>
      <View style={{ flexDirection: "row" }}>
      <TouchableOpacity onPress={chamarEfetuarLogin}>
        {!loading ? (
          <Text style={style.botao}> Entrar</Text>
        ) : (
          <ActivityIndicator size="small" color="#e5ff00" />
        )}
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {navigation.navigate('Cadastrar')}}>
        <Text style={style.botaoDois}>Cadastre-se 
        <FontAwesome5 name="candy-cane" size={22} color="brown"/>
        </Text>
      </TouchableOpacity>
      </View>
      <View>
      <Image
        source={image2} style={style.logo}
      />
      </View>
      </ImageBackground>
    </View>
  );
}
