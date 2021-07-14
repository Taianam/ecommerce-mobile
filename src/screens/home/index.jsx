import React, { useEffect, useState } from 'react';
import api from '../../service/api';
import Interface from '../../assets/Interface.png';
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
            <Image source={Interface} style={style.img} />
            <ScrollView>
            <Text style={style.titulo}>BEM VINDO!</Text>
            <TextInput style={style.searchInput} placeholder="Pesquise aqui" />
                {produtos.map((p) =>
                    <View key={p.id}>
                        <Cards produto={p} />
                    </View>)
                }
            </ScrollView>
        </View>
    )
}
