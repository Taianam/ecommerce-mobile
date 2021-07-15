import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { style } from "./style";

export function ModalCustom({ children, icone, fechar }) {
    const [modalVisible, setModalVisible] = useState(false);
    return (
        <View>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}
            >
                <View
                    style={{
                        backgroundColor: "#ccc",
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
                    {children}
                    <TouchableOpacity 
                        onPress={() => {
                            setModalVisible(!modalVisible);
                        }}>
                        <Text style={{ fontSize: 16 }}>{fechar}</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
            <TouchableOpacity
                onPress={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <View>{icone}</View>
            </TouchableOpacity>
        </View>
    );
}
