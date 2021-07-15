import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { usarProvedorDeAutentificacao } from "../context/autenticar";
import { ClientRouter } from "./client.router";
import { AdmRouter } from "./adm.router";

const App = createStackNavigator();

export function AppRouter() {
	const { user } = usarProvedorDeAutentificacao();

	return (
		<App.Navigator
			screenOptions={{
				headerShown: false,
			}}
		>
			<App.Screen name="App" component={true? AdmRouter : ClientRouter} />
		</App.Navigator>
	);
}
