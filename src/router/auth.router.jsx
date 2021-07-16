import React from "react";
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login";
import Cadastrar from "../screens/cadastro";
import RecuperarSenha from '../screens/senha/recuperarSenha';
import NovaSenha from "../screens/senha/novaSenha";

const Auth = createStackNavigator();

export function AuthRouter() {
	return (
		<Auth.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<Auth.Screen name="Login" component={Login} />
			<Auth.Screen name="Cadastrar" component={Cadastrar} />
			<Auth.Screen name="RecuperarSenha" component={RecuperarSenha} />
			<Auth.Screen name="NovaSenha" component={NovaSenha} />
		</Auth.Navigator>
	);
}
