import "react-native-gesture-handler";
import React, { useState } from "react";
import { styles } from "./styles";
import api from "../../../service/api";
import { useToast, Spinner } from "native-base";
import {Text,
        View,
        TextInput,
        TouchableOpacity,
        ImageBackground, Image} from "react-native";
import Senha from "../../../assets/novaSenha.png";        

const fundo = { uri: "https://i.ibb.co/S5WCBtc/2.jpg" };

export default function NovaSenha({ navigation }) {
    const [codigo, setCodigo] = useState("");
    const [newSenha, setNewSenha] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    // Função que vai validar os inputs
    const validarInputs = () => {
        if (codigo === "" || codigo.length < 10) {
            toast.show({
                title: "Codigo Obrigatorio !",
                status: "info",
                description: "O campo codigo está vazio ou inválido",
            });
            return true;
        }

        if (newSenha === "") {
            toast.show({
                title: "Nova senha Obrigatorio !",
                status: "info",
                description: "O campo nova senha está vazio",
            });
            return true;
        }
    };

    /* Função que vai chamar API para realizar a recuperação da senha do usuário baseado 
    em um codigo enviado por email */
    const handlerNovaSenha = async () => {
        try {
            setLoading(true);

            if (validarInputs()) {
                return;
            }

            const data = {
                chave: codigo,
                novo: newSenha,
            };

            await api.patch("recuperar/email", data);
            toast.show({
                title: "Senha alterada com sucesso !",
                status: "success",
                description: "Realize o login novamente",
            });
            navigation.navigate("Login");
        } catch (error) {
            toast.show({
                title: "Erro ao alterar a senha!",
                status: "error",
                description: "Verifique seu codigo e tente novamente",
            });
        } finally {
            setLoading(false);
        }
    };

    return (
        <ImageBackground source={fundo} style={styles.fundo}>
        
            <View style={styles.container}>
                {loading ? (
                    <Spinner size="lg" />
                ) : (
                    <>
                        <Image style={styles.imagem} source={Senha}/>
                        <Text style={styles.title}>Digite seu código e sua nova senha</Text>
                        <TextInput
                            style={styles.form}
                            label="Código"
                            placeholder="Código"
                            placeholderTextColor="#000"
                            onChangeText={setCodigo}
                        />
                        <TextInput
                            style={styles.form}
                            label="Nova senha"
                            placeholder="Nova senha"
                            placeholderTextColor="#000"
                            onChangeText={setNewSenha}
                        />
                        <TouchableOpacity
                            style={styles.button}
                            title="Enviar"
                            activeOpacity={0.9}
                            onPress={handlerNovaSenha}
                        >
                            <Text style={styles.buttonTitle}>Enviar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </ImageBackground>
    );
}
