import React from "react";
import {
  FontAwesome5,
  Entypo,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/produto/home";
import { Categorias } from "../screens/categoria/categorias";
import { Chat } from "../screens/chat";

const Adm = createMaterialBottomTabNavigator();

export function AdmRouter() {
  return (
    <Adm.Navigator
      initialRouteName="Home"
      activeColor="#fc7782"
      inactiveColor="#525252"
      barStyle={{ backgroundColor: "#e7e7e7" }}
    >
      <Adm.Screen
        name="Produtos"
        component={Home}
        options={{
          tabBarIcon: ({ focused }) => (
            <FontAwesome5
              name="home"
              size={22}
              color={focused ? "#fc7782" : "#525252"}
            />
          ),
        }}
      />
      <Adm.Screen
        name="Categoria"
        component={Categorias}
        options={{
          tabBarIcon: ({ focused }) => (
            <Entypo
              name="list"
              size={22}
              color={focused ? "#fc7782" : "#525252"}
            />
          ),
        }}
      />
      <Adm.Screen
        name="Menssagem"
        component={Chat}
        options={{
          tabBarIcon: ({ focused }) => (
            <MaterialCommunityIcons
              name="phone-message"
              size={22}
              color={focused ? "#fc7782" : "#525252"}
            />
          ),
        }}
      />
    </Adm.Navigator>
  );
}
