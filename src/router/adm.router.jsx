import * as React from "react";
import { Button, View } from "react-native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import { Home } from "../screens/produto/home";
import { Atualizar } from "../screens/produto/atualizar";
import { Cadastrar } from "../screens/produto/cadastrar";

const Adm = createDrawerNavigator();

export function AdmRouter() {


  return (
    <Adm.Navigator initialRouteName="Home">
      <Adm.Screen name="Home" component={Home} />
      <Adm.Screen name="Atualizar" component={Atualizar} />
      <Adm.Screen name="Cadastrar" component={Cadastrar} />
    </Adm.Navigator>
  );
}
