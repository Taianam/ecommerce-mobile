import React from 'react';
import { View, TextInput } from 'react-native';

export function Cadastrar(){
    const [ nome, setNome  ] = useState();
    const [ descricao, setDescricao ] = useState();
    const [ imagem, setImagem ] = useState();
    const [ estoque, setEstoque ] = useState();
    const [ preco, setPreco ] = useState();
    const [ dataCadastro, setDataCadastro ] = useState(new Date().getDate());

    return(
        <View>
            <TextInput value={nome} onChangeText={setNome}/>
            <TextInput value={descricao} onChangeText={setDescricao}/>
            <TextInput value={imagem} onChangeText={setImagem}/>
            <TextInput value={estoque} onChangeText={setEstoque}/>
            <TextInput value={preco} onChangeText={setPreco}/>
        </View>
    )
}