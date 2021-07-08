import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { AppRouter } from './app.router';
import { AuthRouter } from './auth.router';
import { useAuth } from '../hooks/auth';

const Main = createStackNavigator();

export function MainRouter(){

    const { user } = useAuth()

    const autentificao = !!user; 

    return(
        <Main.Navigator screenOptions={{
            headerShown: false
          }}>
            <Main.Screen name="Root" component={autentificao ? AppRouter : AuthRouter}/>
        </Main.Navigator>
    )
}