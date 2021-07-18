import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Image,
  ImageBackground,
} from "react-native";
import { ModalCustom } from "../../../components/modal";
import { EvilIcons,Feather } from "@expo/vector-icons";
import styles from "./style";
import api from "../../../service/api.categoria";
import Atualizar from "../atualizar";
import Cadastrar from "../cadastrar";
import logoAtualizar from "../../../assets/categoria.png";
import { usarProvedorDeAutentificacao } from "../../../context/autenticar";

export function Categorias() {
  const [categorias, setCategorias] = React.useState([]);
  const { efetuarLogoff } = usarProvedorDeAutentificacao();

  React.useEffect(() => {
    API();
  }, []);

  const API = () => {
    api.obterCategorias().then((response) => {
      setCategorias(response);
    });
  };

  return (
    <View style={styles.container}>
      <ImageBackground
        source={require("../../../assets/BcgDoces.jpeg")}
        style={styles.image}
      >
        <Image style={styles.imagem} source={logoAtualizar} />

        <View>
			<View style={styles.botaos}>

			
          <TouchableOpacity
            style={styles.buttonSair}
            onPress={() => efetuarLogoff()}
          >
            <Text style={styles.texto}>
              {" "}
              Sair <Feather name="log-out" size={15} color="white" />{" "}
            </Text>
          </TouchableOpacity>
          <ModalCustom
            fechar={"Cancelar"}
            icone={<Text style={styles.nova}>Nova Categoria</Text>}
          >
            <Cadastrar />
          </ModalCustom>
		  </View>
          <ScrollView>
            <View>
              {categorias.map((c) => {
                return (
                  <View key={c.id} style={styles.itens}>
                    <Text style={styles.nome}>
                      {c.id} {c.nome}
                    </Text>
                    <Text style={styles.descricao}>{c.descricao}</Text>

                    <ModalCustom
                      fechar={"Cancelar"}
                      icone={
                        <EvilIcons name="pencil" size={24} color="black" />
                      }
                    >
                      <Atualizar atualizar={API} categoria={c} />
                    </ModalCustom>
                  </View>
                );
              })}
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
}
