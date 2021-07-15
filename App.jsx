import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainRouter } from "./src/router/main.router";
import { ProvedorDeAutentificacao } from "./src/context/autenticar";
import "./src/service/firebase";
import { LogBox } from "react-native";
import { DarkModeContexto } from "./src/context/darkMode";
LogBox.ignoreLogs(["Setting a timer"]);

import Categoria from "./src/screens/categoria/categorias/index.jsx";
import Produto from "./src/screens/produto/home/index";

export default function App() {
	return (
		// <SafeAreaProvider style={{ paddingTop: 24 }}>
		//     <StatusBar style="light" backgroundColor="#3a5ca5" />
		//     <DarkModeContexto>
		//         <ProvedorDeAutentificacao>
		//             <NavigationContainer>
		//                 <MainRouter />
		//             </NavigationContainer>
		//         </ProvedorDeAutentificacao>
		//     </DarkModeContexto>
		// </SafeAreaProvider>

		<Categoria />
	);
}
