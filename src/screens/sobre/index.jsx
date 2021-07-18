import React from "react";
import {View, Text, StyleSheet, Image, ScrollView} from "react-native"
import logo from "../../../assets/logo1.png"
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
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>A lider do grupo, Tai. Também conhecida como deusa, a top, a braba, a soberana</Text>
                    </View>
                    <View style={styles.view}> 
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>A segunda em comando Sthephanie, também conhecida como o fora de graça, a rainha da api, a braba da deepweb</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>Giovane, o brabo do photoshop e da estilização</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>Larissa, sempre disposta a resolver as tretas que acontecem no native</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>Giulia, a braba das tretas, sempre disposta a compartilhar os babados da turma e destiladora de venenos nas horas vagas</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>Luan, entrou na maciota, mas jé subiu pra um dos melhores integrantes do grupo, brabissimo em tudo o que tenta fazer</Text>
                    </View>
                    <View style={styles.view}>
                        <Image style={styles.image} source={logo} />
                        <Text style={styles.text}>Gustavo, o mais meme de todos, sabe fazer nada, mas pelo menos está sempre tentando aprender, apesar de falhar miseravelmente</Text>
                    </View>
                </View>
            </View>
        </ScrollView>
    );
};