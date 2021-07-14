import React, { useState } from "react";
import { View, Button, Platform, TextInput,  } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Data = ({ inserirDataCadastro }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [show, setShow] = useState(false);

  // Função que vai tratar a data de dataCadastro
  function formatarData(data) {
    return String(data.toISOString().slice(0, 10));
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    
    const dataFormatada = formatarData(currentDate);
    setDate(dataFormatada)
    inserirDataCadastro(dataFormatada);
  };

  const showMode = (currentMode) => {
    setShow(true);
    setMode(currentMode);
  };

  const showDatepicker = () => {
    showMode("date");
  };

  const showTimepicker = () => {
    showMode("time");
  };

  return (
    <View>
      <View>
       <Button onPress={onChange} title="data de cadastra"/>
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode={mode}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
