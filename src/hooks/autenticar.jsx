import React,{ createContext, useState, useContext, useEffect} from  "react";
import AsyncStorage from '@react-native-async-storage/async-storage';
import api from "../service/api";

const AuthContext = createContext({});

 function ProvedorDeAutentificacao({children}){

    const [user, setUser] = useState();

    useEffect(()=>{
      recuperarUsuario();
    },[])

    // Função para recuperar o usuário do localStorage
    async function recuperarUsuario() {
      const usuario = await AsyncStorage.getItem("E-COMMECER_user");
    
      if(user){
        setUser(JSON.parse(usuario));
      }
    }
    
    // Função que vai realizar o login
    const efetuarLogin = async ({email, senha})=>{
      
       const dadosUsuario = {
          'email':email,
          'senha':senha,
       }
       
      const { data } = await api.post('login', dadosUsuario);
      await AsyncStorage.setItem("E-COMMECER_token", JSON.stringify(data.token));
      await AsyncStorage.setItem("E-COMMECER_user", JSON.stringify(data.cliente));
      setUser(data.cliente)
    }

    // Função para sair do aplicação
    const efetuarLogoff = async () => {
      setUser(undefined);
      await AsyncStorage.removeItem("E-COMMECER_token");
      await AsyncStorage.removeItem("E-COMMECER_user");
    } 

    return(
      <AuthContext.Provider value={{user, efetuarLogin, efetuarLogoff}}>
         {children}
      </AuthContext.Provider>
    )
 }

 function usarProvedorDeAutentificacao() {
   const context = useContext(AuthContext);
 
   if (!context) {
     throw new Error('Erro ao usar o ProvedorDeAutentifição');
   }
 
   return context;
 }

 export {ProvedorDeAutentificacao, usarProvedorDeAutentificacao}