import React from 'react'
import { View, Text, Image, TouchableOpacity, ScrollView, TextInput } from 'react-native'
import { Cards } from '../../components/cards/index'
import { style } from './style'
import api from '../../service/api'
import Mario from '../../assets/Mario.png'
import { useAuth } from '../../hooks/auth'
import AsyncStorage from '@react-native-async-storage/async-storage'

export function Home() {
    const [produtos, setProdutos] = React.useState([]);

    const { sairLogin, user } = useAuth();

    React.useEffect(() => {
        obterProduto();
    }, [])

    const obterProduto = async () => {

        try {
            const { data } = await api.get('produtos')

            setProdutos(data);
        } catch (error) {
            console.log(error)
        }
    }


    return (

        <View style={{ flex: 1, backgroundColor: '#3a5ca5', padding: 10 }}>

            <Image source={Mario} style={style.img} />
            <Text> Bem vindo {user.nome}</Text>
            <TouchableOpacity onPress={sairLogin}>
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