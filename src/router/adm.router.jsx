import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/produto/home";
import { Cadastrar } from "../screens/produto/cadastrar";

const Adm = createMaterialBottomTabNavigator();

export function AdmRouter() {
    return (
        <Adm.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#04205c"
            barStyle={{ backgroundColor: "#3a5ca5" }}
        >
            <Adm.Screen
                name="Produtos"
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
            <Adm.Screen name="Cadastrar" component={Cadastrar} />
        </Adm.Navigator>
    );
}