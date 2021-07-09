import React from "react";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { MainRouter } from "./src/router/main.router";
import { ProvedorDeAutentificacao } from "./src/hooks/autenticar";

export default function App() {
  return (
    <SafeAreaProvider style={{ paddingTop: 24 }}>
      <StatusBar style="light" backgroundColor="#3a5ca5" />
      <ProvedorDeAutentificacao>
        <NavigationContainer>
          <MainRouter />
        </NavigationContainer>
      </ProvedorDeAutentificacao>
    </SafeAreaProvider>
  );
}
