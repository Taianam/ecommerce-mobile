import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Mario from '../../assets/Mario.png';
import { Cards } from '../../components/cards/cardsHome';
import { usarProvedorDeAutentificacao } from '../../hooks/autenticar';
import { style } from './style';
import { View, 
         Text, 
         Image, 
         TouchableOpacity, 
         ScrollView, 
         TextInput } from 'react-native';

export function Home() {
    const [produtos, setProdutos] = useState([]);

    const { efetuarLogoff } = usarProvedorDeAutentificacao();

    useEffect(() => {
        obterProduto();
    }, [])

    //Função para chamar os produtos na api
    const obterProduto = async () => {
        try {
            const { data } = await api.get('produtos')
            setProdutos(data);
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <View style={style.fundo}>
            <Image source={Mario} style={style.img} />
            <TouchableOpacity onPress={efetuarLogoff}>
                <Text>SAIR</Text>
            </TouchableOpacity>
            <ScrollView>
            <Text style={style.titulo}>BEM VINDO!</Text>
            <TextInput style={style.input}></TextInput>
                {produtos.map((p) =>
                    <View key={p.id}>
                        <Cards produto={p} />
                    </View>)
                }
            </ScrollView>
        </View>
    )
}