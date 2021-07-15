import React, { useState, useEffect, useRef, useCallback } from "react";
import Constants from "expo-constants";
import * as Notifications from "expo-notifications";
import { Platform, Button } from "react-native";
import { usarProvedorDeAutentificacao } from "./autenticar";
import firebase from "firebase";
import "firebase/firestore";

Notifications.setNotificationHandler({
    handleNotification: async () => ({
        shouldShowAlert: true,
        shouldPlaySound: false,
        shouldSetBadge: false,
    }),
});

export function Notificacao({ children }) {
    const [expoPushToken, setExpoPushToken] = useState("");
    const [notification, setNotification] = useState(false);
    const notificationListener = useRef();
    const responseListener = useRef();
    const { user } = usarProvedorDeAutentificacao();

    useEffect(() => {
        registerForPushNotificationsAsync().then((token) =>
            setExpoPushToken(token)
        );

        notificationListener.current = Notifications.addNotificationReceivedListener(
            (notification) => {
                setNotification(notification);
            }
        );

        responseListener.current = Notifications.addNotificationResponseReceivedListener(
            (response) => {
                console.log(response);
            }
        );
        return () => {
            Notifications.removeNotificationSubscription(
                notificationListener.current
            );
            Notifications.removeNotificationSubscription(
                responseListener.current
            );
        };
    }, []);

    const validarNotificacao = async (dados) => {
        const resultado = dados.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        if (resultado.length > 0) {
            resultado.sort((inicial, final) => inicial.time > final.time);
            const ultimaMensagem = resultado[resultado.length - 1];
            if (ultimaMensagem.userId !== user.id) {
                await schedulePushNotification(
                    ultimaMensagem.userNome,
                    ultimaMensagem.menssagem
                );
            }
        }
    };

    useEffect(() => {
        const notificacaoFireStore = firebase
            .firestore()
            .collection("chat-doceria")
            .onSnapshot(validarNotificacao);
        return () => notificacaoFireStore();
    }, []);

    return <>{children}</>;
}

async function schedulePushNotification(userName, userMsg) {
    await Notifications.scheduleNotificationAsync({
        content: {
            title: `${userName} 📬`,
            body: `${userMsg}`,
            data: { data: "goes here" },
        },
        trigger: { seconds: 2 },
    });
}

async function registerForPushNotificationsAsync() {
    let token;
    if (Constants.isDevice) {
        const {
            status: existingStatus,
        } = await Notifications.getPermissionsAsync();
        let finalStatus = existingStatus;
        if (existingStatus !== "granted") {
            const { status } = await Notifications.requestPermissionsAsync();
            finalStatus = status;
        }
        if (finalStatus !== "granted") {
            alert("Failed to get push token for push notification!");
            return;
        }
        token = (await Notifications.getExpoPushTokenAsync()).data;
        console.log(token);
    }

    if (Platform.OS === "android") {
        Notifications.setNotificationChannelAsync("default", {
            name: "default",
            importance: Notifications.AndroidImportance.MAX,
            vibrationPattern: [0, 250, 250, 250],
            lightColor: "#FF231F7C",
        });
    }
    return token;
}
