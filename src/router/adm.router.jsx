import React from "react";
import { FontAwesome5 } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { Home } from "../screens/produto/home";
import { Categorias } from "../screens/categoria/categorias";
import { Chat} from "../screens/chat"

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
            <Adm.Screen name="Categoria" component={Categorias} />
            <Adm.Screen name="Menssagem" component={Chat} />
        </Adm.Navigator>
    );
}