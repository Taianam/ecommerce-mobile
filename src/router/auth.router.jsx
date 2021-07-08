import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { Login } from '../screens/login';

const Auth= createStackNavigator();

export function AuthRouter(){

    return(
        <Auth.Navigator>
            <Auth.Screen name="Login" component={Login}/>
        </Auth.Navigator>
    )
}