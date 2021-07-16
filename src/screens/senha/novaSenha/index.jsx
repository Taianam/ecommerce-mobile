import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { styles } from './styles'
import { Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground } from 'react-native'
import api from '../../../service/api';

const fundo = {uri: 'https://i.ibb.co/S5WCBtc/2.jpg'}

export default function NovaSenha({navigation}){
  const [codigo, setCodigo] = useState('');
  const [newSenha, setNewSenha] = useState('');

  const handlerNovaSenha = async () => {
    const novaSenha = {
      chave:codigo,
      senha: newSenha,
    }

    await api.patch('recuperar/email', novaSenha)
    navigation.navigate('Login')

  }

  return(
    <ImageBackground source={fundo} style={styles.fundo}>

      <View style={styles.container}>
        <Text style={styles.title}>Digite sua nova senha</Text>
          <TextInput style={styles.form}
            label="Código"
            placeholder="Código"
            placeholderTextColor='#000'
            onChangeText={setCodigo}
          />

          <TextInput style={styles.form}
            label="Nova senha"
            placeholder="Nova senha"
            placeholderTextColor='#000'
            onChangeText={setNewSenha}
          />
  
          <TouchableOpacity style={styles.button}
            title="Enviar" 
            activeOpacity={0.9} 
            onPress={handlerNovaSenha}
            >
            <Text style={styles.buttonTitle}>
            Enviar
            </Text>

          </TouchableOpacity> 
      </View>

    </ImageBackground>
  )
}