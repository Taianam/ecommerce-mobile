import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Login } from "../screens/login";
import Cadastrar from "../screens/cadastro";

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
    </Auth.Navigator>
  );
}
