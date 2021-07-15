import React,{ createContext, useState, useContext } from  "react";

const AuthContext = createContext({});

 function DarkModeContexto({children}){

    const [dark, setDark] = useState(false);

    function alterarDarkMode(){
        setDark(!dark)
    }

    return(
      <AuthContext.Provider value={{alterarDarkMode, dark}}>
         {children}
      </AuthContext.Provider>
    )
 }

 function usarDarkModeContexto() {
   const context = useContext(AuthContext);
 
    if (!context) {
      throw new Error('Erro ao usar o ProvedorDeAutentifição');
    }
 
   return context;
 }

 export {DarkModeContexto, usarDarkModeContexto}