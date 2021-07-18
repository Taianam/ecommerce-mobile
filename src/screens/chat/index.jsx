import React, { useState, useEffect, useRef } from "react";
import { style, styleUsuario, styleUsuarioOposto } from "./style";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Image
} from "react-native";

import firebase from "firebase";
import "firebase/firestore";
import { Ionicons } from "@expo/vector-icons";
import { usarProvedorDeAutentificacao } from "../../context/autenticar";
import Logo from "../../assets/chat2.png"

export function Chat() {
  const [menssagem, setMensagem] = useState();
  const [todasMensagens, setTodasMenssagens] = useState([]);
  const { user } = usarProvedorDeAutentificacao();

  const scrollViewRef = useRef();

  useEffect(() => {
    buscarMensagens();

    const mensagemInstantania = firebase
      .firestore()
      .collection("chat-doceria")
      .onSnapshot(alteracaoMenssagem);
    return () => mensagemInstantania();
  }, []);

  function ordemDecrescente(inicial, final) {
    return inicial.time > final.time;
  }

  // Função callback que executar toda vez que o firestore for alterado
  const alteracaoMenssagem = (dados) => {
    const resultado = dados.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    resultado.sort(ordemDecrescente);
    setTodasMenssagens(resultado);
  };

  //Função que buscar as mensagens no firestore
  const buscarMensagens = async () => {
    try {
      const response = await firebase
        .firestore()
        .collection("chat-doceria")
        .get();
      const temp = [];
      response.forEach((doc) => {
        temp.push({
          id: doc.id,
          ...doc.data(),
        });
      });
      temp.sort(ordemDecrescente);
      setTodasMenssagens(temp);
    } catch (error) {
      console.log(error);
    }
  };

  //Função que ira guardar as mesnssagem para o firebase/firestore
  const enviarMensagem = async () => {
    try {
      if (menssagem === undefined) {
        return;
      }
      await firebase.firestore().collection("chat-doceria").add({
        menssagem: menssagem,
        userId: user.id,
        userNome: user.nome,
        hora: new Date().toLocaleTimeString(),
        time: new Date(),
      });
      setMensagem("");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View style={style.container}>
      
        <Text style={style.header}>
          Olympus Chat
        </Text>
    
      <ScrollView
        ref={scrollViewRef}
        onContentSizeChange={() =>
          scrollViewRef.current.scrollToEnd({ animated: true })
        }
      >
        <View>
          {todasMensagens.map((msg) => (
            <View style={style.menssagens} key={msg.id}>
              {msg.userNome === user.nome ? (
                <View style={styleUsuario.mensagemUsuario}>
                  <Text style={styleUsuario.usuarioNome}>{msg.userNome}</Text>
                  <Text style={styleUsuario.textUsuario}>{msg.menssagem}</Text>
                  <Text style={styleUsuario.timeUsuario}>{msg.hora}</Text>
                </View>
              ) : (
                <View style={styleUsuarioOposto.mensagemUsuarioOposto}>
                  <Text style={styleUsuarioOposto.usuarioNomeOposto}>
                    {msg.userNome}
                  </Text>
                  <Text style={styleUsuarioOposto.textUsuarioOposto}>
                    {msg.menssagem}
                  </Text>
                  <Text style={styleUsuarioOposto.timeUsuarioOposto}>
                    {msg.hora}
                  </Text>
                </View>
              )}
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={style.enviarMensagemView}>
        <TextInput
          value={menssagem}
          onChangeText={setMensagem}
          placeholder="Mensagem"
          style={style.enviarMensagemText}
        />
        <TouchableOpacity onPress={enviarMensagem}>
          <Text>
            <Ionicons name="md-paper-plane" size={35} color="#0ca6ee" />
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
