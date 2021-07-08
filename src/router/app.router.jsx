import React from 'react';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { Home } from '../screens/home';
import { FontAwesome5 } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';

const App = createMaterialBottomTabNavigator();

export function AppRouter() {
    return (
        <App.Navigator
            initialRouteName="Home"
            activeColor="#f0edf6"
            inactiveColor="#04205c"
            barStyle={{ backgroundColor: '#3a5ca5' }}
        >
            <App.Screen name="Home" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="home" size={22} color={focused?'#f0edf6':'#17377c'} />
                ),
            }}

            />
            <App.Screen name="Carrinho" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <FontAwesome5 name="cart-plus" size={22} color={focused?'#f0edf6':'#17377c'}  />
                ),
            }}
            />
            <App.Screen name="Menssagem" component={Home} options={{
                tabBarIcon: ({focused}) => (
                    <AntDesign name="message1" size={24} color={focused?'#f0edf6':'#17377c'}  />
                ),
            }}
            />
 
        </App.Navigator>
    )
}