import React from "react";
import { ControleCarrinho } from "../context/controleCarrinho";
import { Home } from "../screens/home";
import { Carrinho } from "../screens/carrinho";
import { createDrawerNavigator, DrawerContentScrollView, DrawerItemList, DrawerItem} from "@react-navigation/drawer";
import { Chat } from "../screens/chat";
import { Sair } from "../screens/sair";
import { Notificacao } from "../context/notificacao";
import { usarDarkModeContexto } from "../context/darkMode";
import  Sobre  from "../screens/sobre"

const App = createDrawerNavigator();

export function ClientRouter() {
   
    const {alterarDarkMode} = usarDarkModeContexto();

    return (
        <ControleCarrinho>
            <Notificacao>
                <App.Navigator
                    initialRouteName="Home"
                    drawerContent={(props) => {
                        return (
                            <DrawerContentScrollView {...props}>
                                <DrawerItemList {...props} />
                                <DrawerItem
                                    label="DarkMode"
                                    onPress={alterarDarkMode}
                                />
                            </DrawerContentScrollView>
                        );
                    }}
                >
                    <App.Screen name="Home" component={Home} />
                    <App.Screen name="Carrinho" component={Carrinho} />
                    <App.Screen name="Menssagem" component={Chat} />
                    <App.Screen name="Sobre" component={Sobre} />
                    <App.Screen name="Sair" component={Sair} />
                    
                </App.Navigator>
            </Notificacao>
        </ControleCarrinho>
    );
}
