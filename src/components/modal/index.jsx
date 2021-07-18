import React, { useState } from "react";
import { View, Text, Modal, TouchableOpacity } from "react-native";
import { style } from "./style";

export function ModalCustom({ children, icone, fechar, atualizar }) {
	const [modalVisible, setModalVisible] = useState(false);

	return (
		<View>
			<Modal animationType="slide" transparent={true} visible={modalVisible}>
				<View
					style={{
						backgroundColor: "#f59db4",
						flex: 1,
						alignItems: "center",
						justifyContent: "center",
					}}
				>
					{children}
					<TouchableOpacity
				
						onPress={() => {
							setModalVisible(!modalVisible);
						}}
					>
						<Text style={{ fontSize: 25, color:"#504f4f" }}>{fechar}</Text>
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
