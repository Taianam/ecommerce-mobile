import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import TaianaImagem from "../../assets/membros/taiana.jpeg"
import SthephanieImagem from "../../assets/membros/sthephanie.jpg"
import GiovanniImagem from "../../assets/membros/giovanni.jpeg"
import LarissaImagem from "../../assets/membros/larissa.jpeg"
import GiuliaImagem from "../../assets/membros/giulia.jpeg"
import LuanImagem from "../../assets/membros/luan.jpg"
import GustavoImagem from "../../assets/membros/gustavo.jpeg"
import logoPrincipal from '../../assets/sobrenos.png'
import  styles  from './style';

export function Sobre(){

    return(
        <ScrollView>
            <View style={styles.container}>
            <View >
                <Image style={styles.imagemPrincipal} source={logoPrincipal} />
            </View>
                <View >
                    <View style={styles.view}>
                        <Image style={styles.image} source={TaianaImagem} />
                        <Text style={styles.text}>A lider do grupo, Tai. Também conhecida como deusa, a top, a braba, a soberana</Text>
                    </View>
                    <View style={styles.view}> 
                        <Image style={styles.image} source={SthephanieImagem} />
                        <Text style={styles.text}>A segunda em comando Sthephanie, também conhecida como o fora de graça, a rainha da api, a braba da deepweb</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={GiovanniImagem} />
                        <Text style={styles.text}>Giovane, o brabo do photoshop e da estilização</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={LarissaImagem} />
                        <Text style={styles.text}>Larissa, sempre disposta a resolver as tretas que acontecem no native</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={GiuliaImagem} />
                        <Text style={styles.text}>Giulia, a braba das tretas, sempre disposta a compartilhar os babados da turma e destiladora de venenos nas horas vagas</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={LuanImagem} />
                        <Text style={styles.text}>Luan, entrou na maciota, mas jé subiu pra um dos melhores integrantes do grupo, brabissimo em tudo o que tenta fazer</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={GustavoImagem} />
                        <Text style={styles.text}>Gustavo, o mais meme de todos, sabe fazer nada, mas pelo menos está sempre tentando aprender, apesar de falhar miseravelmente</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};