import "react-native-gesture-handler";
import React, { useState } from "react";
import { styles } from "./styles";
import api from "../../../service/api";
import LogoRecuperarSenha from "../../../assets/recuperarsenha.png";
import { useToast, Spinner } from "native-base";
import {Text,
       View,
       TextInput,
       TouchableOpacity,
       ImageBackground,
       Image } from "react-native";

const fundo = { uri: "https://i.ibb.co/S5WCBtc/2.jpg" };

export default function RecuperarSenha({ navigation }) {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const toast = useToast();

    // Função que vai validar o input do usuário
    const validarInput = () => {
        if (email === "") {
            toast.show({
                title: "Email Obrigatorio !",
                status: "info",
                description: "O campo email está vazio",
            });
            return true;
        }
    };

    // Função que chama api para realizar a recuperação de senha
    const recuperarSenha = async () => {
        try {
            setLoading(true);
            if (validarInput()) {
                return;
            }
            await api.post("recuperar", { email: email });
            toast.show({
                title: "Solicitação de Nova Senha !",
                status: "success",
                description: "Verifique seu e-mail",
            });
            setTimeout(() => navigation.navigate("NovaSenha"), 1500);
        } catch (error) {
            toast.show({
                title: " Email inválido!",
                status: "error",
                description: "Tente novamente",
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
                        <Image
                            source={LogoRecuperarSenha}
                            style={styles.logo}
                        />
                        <Text style={styles.title}>Digite seu e-mail</Text>
                        <TextInput
                            style={styles.form}
                            label="E-mail"
                            placeholder="E-mail"
                            placeholderTextColor="#000"
                            onChangeText={setEmail}
                        />

                        <TouchableOpacity
                            style={styles.button}
                            title="Enviar"
                            activeOpacity={0.9}
                            onPress={recuperarSenha}
                        >
                            <Text style={styles.buttonTitle}>Enviar</Text>
                        </TouchableOpacity>
                    </>
                )}
            </View>
        </ImageBackground>
    );
}
