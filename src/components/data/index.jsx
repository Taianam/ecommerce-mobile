import React, { useState } from "react";
import { View, Button, Platform, TextInput, Keyboard  } from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

export const Data = ({ inserirDataCadastro }) => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState("date");
  const [dataString, setDataString] = useState("")
  const [show, setShow] = useState(false);

  // Função que vai tratar a data de dataCadastro
  function formatarData(data) {
    return String(data.toISOString().slice(0, 10));
  }

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios");

    
    const dataFormatada = formatarData(currentDate);
    setDate(currentDate)
    setDataString(dataFormatada)
    inserirDataCadastro(dataFormatada);
    Keyboard.dismiss()
  };

  const showMode = (currentMode) => {
    Keyboard.dismiss()
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
        <TextInput onTouchStart={showMode} value={dataString} style={{backgroundColor: 'red'}}/>
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
