import React,{ createContext, useState, useContext, useEffect} from  "react";
import api from "../service/api";
import AsyncStorage from '@react-native-async-storage/async-storage'
const AuthContext = createContext({});

 function ProvedorDeAutentificacao({children}){

    const [user, setUser] = useState();

    useEffect(()=>{
      recuperarUsuario();
    },[])

    async function recuperarUsuario() {
      const usuario = await AsyncStorage.getItem("E-COMMECER_user");
    
      if(user){
        setUser(JSON.parse(usuario));
      }
    }
    
    const fazerLogin = async ({email, senha})=>{
       let dadosDoUser = {
          'email':email,
          'senha':senha,
       }
       
        const { data } = await api.post('login', dadosDoUser);

        await AsyncStorage.setItem("E-COMMECER_token", JSON.stringify(data.token));
        await AsyncStorage.setItem("E-COMMECER_user", JSON.stringify(data.cliente));

        setUser(data.cliente)
    }

    const sairLogin = async () => {
      setUser(undefined);
      await AsyncStorage.removeItem("E-COMMECER_token");
      await AsyncStorage.removeItem("E-COMMECER_user");
    } 
    return(
      <AuthContext.Provider value={{user, fazerLogin, sairLogin}}>
         {children}
      </AuthContext.Provider>

    )
 }

 function useAuth() {
   const context = useContext(AuthContext);
 
   if (!context) {
     throw new Error('useAuth must be used within an AuthProvider');
   }
 
   return context;
 }

 export {ProvedorDeAutentificacao, useAuth}