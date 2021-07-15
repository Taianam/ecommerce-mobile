import 'react-native-gesture-handler';
import React, {useState} from 'react';
import { styles } from './styles'
import { Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  ImageBackground, 
  Image} from 'react-native'
import { cadastrarCliente } from '../../service/api.cliente';

const fundo = {uri: 'https://i.ibb.co/S5WCBtc/2.jpg'}
const cadastroLogo = {uri: 'https://i.ibb.co/LPG9sQv/cadastro.png'}

export default function Cadastrar({navigation}){
  const [newNome, setNewNome] = useState('');
  const [newDataDeNascimento, setNewDataDeNascimento] = useState('');
  const [newTelefone, setNewTelefone] = useState('');
  const [newCpf, setNewCpf] = useState('');
  const [newEmail, setNewEmail] = useState('');
  const [newSenha, setNewSenha] = useState('');
  const [newCep, setNewCep] = useState('');

  const handleCadastrar = async () =>{
    const cliente = {
      nome: newNome,
      dataDeNascimento: newDataDeNascimento,
      telefone: newTelefone,
      cpf: newCpf,
      email: newEmail,
      senha: newSenha,
      endereco: {
        cep: newCep
      }
    };

      await cadastrarCliente(cliente)
      setTimeout(() => {
        navigation.navigate('Login')
      }, 1000);
}

  return(
    <ImageBackground source={fundo} style={styles.fundo}>
      <View style={styles.container}>
        <Image source={cadastroLogo} style={styles.logo}/>
          <TextInput style={styles.form}
            label="Nome"
            placeholder="Nome"
            placeholderTextColor='#000'
            onChangeText={setNewNome}
          />

          <TextInput style={styles.form}
            label="Data de Nascimento"
            placeholder="Data de Nascimento"
            placeholderTextColor='#000'
            onChangeText={setNewDataDeNascimento}
          />

          <TextInput style={styles.form}
            label="Telefone"
            placeholder="Telefone"
            placeholderTextColor='#000'
            onChangeText={setNewTelefone}
          />

          <TextInput style={styles.form}
            label="CPF"
            placeholder="CPF"
            placeholderTextColor='#000'
            onChangeText={setNewCpf}
          />

          <TextInput style={styles.form}
            label="E-mail"
            placeholder="E-mail"
            placeholderTextColor='#000'
            onChangeText={setNewEmail}
          />

          <TextInput style={styles.form}
            label="Senha"
            placeholder="Senha"
            placeholderTextColor='#000'
            secureTextEntry={true}
            onChangeText={setNewSenha}
          />

          <TextInput style={styles.form}
            label="CEP"
            placeholder="CEP"
            placeholderTextColor='#000'
            onChangeText={setNewCep}
          />
          <TouchableOpacity style={styles.button}
            title="Cadastrar" 
            activeOpacity={0.9} 
            onPress={handleCadastrar}
            >
            <Text style={styles.title}>
            Cadastrar
            </Text>
          </TouchableOpacity>
      </View>
    </ImageBackground>
  )
}