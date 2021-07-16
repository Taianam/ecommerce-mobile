import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainRouter } from "./src/router/main.router";
import { ProvedorDeAutentificacao } from "./src/context/autenticar";
import "./src/service/firebase";
import { LogBox } from "react-native";
import { DarkModeContexto } from "./src/context/darkMode";
import {NativeBaseProvider} from 'native-base'
LogBox.ignoreLogs(["Setting a timer"]);


export default function App() {
	return (
		 <SafeAreaProvider style={{ paddingTop: 24 }}>
		     <StatusBar style="light" backgroundColor="#3a5ca5" />
		     <DarkModeContexto>
		         <ProvedorDeAutentificacao>
		             <NavigationContainer>
						 <NativeBaseProvider>
						 	<MainRouter />
						 </NativeBaseProvider>	                		
		             </NavigationContainer>
		         </ProvedorDeAutentificacao>
		     </DarkModeContexto>
		 </SafeAreaProvider>	
	);
}
