import React, { useEffect } from "react";
import { View, Text } from "react-native";
import { usarProvedorDeAutentificacao } from "../../hooks/autenticar";

export function Sair() {
  const { efetuarLogoff } = usarProvedorDeAutentificacao();

  useEffect(() => {
    efetuarLogoff();
  }, []);
  return (
    <View>
      <Text> Saindo.. </Text>
    </View>
  );
}
