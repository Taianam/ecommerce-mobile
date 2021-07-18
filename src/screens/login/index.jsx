import React, { useState } from "react";
import { style } from "./style";
import { usarProvedorDeAutentificacao } from "../../context/autenticar";
import { FontAwesome5 } from "@expo/vector-icons";
import { useToast } from 'native-base';
import { View,
         Text,
         TouchableOpacity,
         TextInput,
         ActivityIndicator,
         Image,
         ImageBackground } from "react-native";

const image2 = { uri: "https://i.ibb.co/djpbGVC/logo1.png" };
const fundo = { uri: "https://i.ibb.co/3Mym9y9/1-2.jpg" };

export function Login({ navigation }) {
    const [email, setEmail] = useState();
    const [senha, setSenha] = useState();
    const [loading, setLoading] = useState(false);
    const toast = useToast();
    const { efetuarLogin } = usarProvedorDeAutentificacao();

    // Função para limpar os campos após a submissão
    const limparCampos = () => {
        setEmail("");
        setSenha("");
    };

    // Função para validar os inputs
    const checarInputs = () => {
        if (email === undefined || email === "") {
            toast.show({
              title: 'Email Obrigatorio !', 
              status: 'info',
              description: 'O campo email está vazio'
            })
            return true;
        }

        if (senha === undefined || senha === "") {
            toast.show({
              title: 'Senha Obrigatoria !', 
              status: 'info',
              description: 'O campo senha está vazio'
            })
            return true;
        }
    };

    // Função que vai chamar a função de login no Autenficar.jsx
    const chamarEfetuarLogin = async () => {
        try {
            setLoading(true);

            if (checarInputs()) {
              return;
            }
            await efetuarLogin({ email, senha });
            toast.show({
              title: 'Bem vindo !', 
              status: 'success',
              description: 'Você logou com sucesso'
            })
        } catch (error) {
            toast.show({
              title: 'Email ou senha invalido!', 
              status: 'warning',
              description: 'Usuario não cadastrado!'
            })
        } finally {
            limparCampos();
            setLoading(false);
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
                <View>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("RecuperarSenha");
                        }}
                    >
                        <Text style={style.forget}>
                            Esqueceu sua senha? Clica aqui
                        </Text>
                    </TouchableOpacity>
                </View>
                <View style={style.acao}>
                    <TouchableOpacity style={style.botao} onPress={chamarEfetuarLogin}>
                        {!loading ? (
                            <Text style={style.botaoTexto}> Entrar</Text>
                        ) : (
                            <ActivityIndicator size="small" color="#000" />
                        )}
                    </TouchableOpacity>
                    <TouchableOpacity style={style.botaoDois}
                        onPress={() => {
                            navigation.navigate("Cadastrar");
                        }}
                    >
                        <Text style={style.botaoTexto}>
                            Cadastre-se
                            <FontAwesome5
                                name="candy-cane"
                                size={22}
                                color="brown"
                            />
                        </Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <Image source={image2} style={style.logo} />
                </View>
            </ImageBackground>
        </View>
    );
}
