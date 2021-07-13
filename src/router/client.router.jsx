import React from "react";
import { Text, View } from "react-native";
import {
  FontAwesome5,
  MaterialCommunityIcons,
  AntDesign,
} from "@expo/vector-icons";
import {
  ControleCarrinho,
  usarControleCarrinho,
} from "../hooks/controleCarrinho";
import { Home } from "../screens/home";
import { Carrinho } from "../screens/carrinho";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Chat } from "../screens/chat";
import { Sair } from "../screens/sair";


const App = createMaterialBottomTabNavigator();

export function ClientRouter() {

  function getLengthProdutos() {
    const { produtosIds } = usarControleCarrinho();
    if (produtosIds !== undefined) {
      return produtosIds.length;
    }
  }

  return (
    <ControleCarrinho>
      <App.Navigator
        initialRouteName="Home"
        activeColor="#f0edf6"
        inactiveColor="#04205c"
        barStyle={{ backgroundColor: "#3a5ca5" }}
      >
        <App.Screen
          name="Home"
          component={Home}
          options={{
            tabBarIcon: ({ focused }) => (
              <FontAwesome5
                name="home"
                size={22}
                color={focused ? "#f0edf6" : "#17377c"}
              />
            ),
          }}
        />
        <App.Screen
          name="Carrinho"
          component={Carrinho}
          options={{
            tabBarIcon: ({ focused }) => (
              <View
                style={{
                  flexDirection: "row-reverse",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Text style={{ color: "#fff" }}> {getLengthProdutos()} </Text>
                <FontAwesome5
                  name="cart-plus"
                  size={22}
                  color={focused ? "#f0edf6" : "#17377c"}
                />
              </View>
            ),
          }}
        />
        <App.Screen
          name="Menssagem"
          component={Chat}
          options={{
            tabBarIcon: ({ focused }) => (
              <AntDesign
                name="message1"
                size={24}
                color={focused ? "#f0edf6" : "#17377c"}
              />
            ),
          }}
        />
        <App.Screen
          name="Sair"
          component={Sair}
          options={{
            tabBarIcon: ({ focused }) => (
              <MaterialCommunityIcons name="logout" size={24} color={focused ? "#f0edf6" : "#17377c"} />
            ),
          }}
        />
      </App.Navigator>
    </ControleCarrinho>
  );
}
