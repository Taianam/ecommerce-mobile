import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { styles } from './styles'
import { Text, 
  View, 
  TextInput,
  TouchableOpacity, 
  ImageBackground, 
  Image, 
  Alert } from 'react-native'
import api from '../../../service/api';
import LogoRecuperarSenha from '../../../assets/recuperarsenha.png'

const fundo = {uri: 'https://i.ibb.co/S5WCBtc/2.jpg'}

export default function RecuperarSenha({navigation}){
  const [email, setEmail] = useState('');

  const handleRecuperarSenha = async () => {

    if(email === '' ){
      Alert.alert("Email obrigatório!", "Digite seu email")
      return 
    }

    const enviarEmail = {
      email,
    }

    await api.post('recuperar', enviarEmail)
    Alert.alert("Solicitação de Nova Senha", "Verifique seu e-mail")
    setTimeout(() => navigation.navigate('NovaSenha') , 1500);
    
  }

  return(
    <ImageBackground source={fundo} style={styles.fundo}>
      <View style={styles.container}>
        <Image source={LogoRecuperarSenha} style={styles.logo}/>
          <Text style={styles.title}>Digite seu e-mail</Text>
              <TextInput style={styles.form}
                label="E-mail"
                placeholder="E-mail"
                placeholderTextColor='#000'
                onChangeText={setEmail}
              />
      
              <TouchableOpacity style={styles.button}
                title="Enviar" 
                activeOpacity={0.9} 
                onPress={handleRecuperarSenha}
                >
                <Text style={styles.buttonTitle}>
                Enviar
                </Text>

              </TouchableOpacity> 
      </View>
    </ImageBackground>
  )
}
