import React, { useEffect, useState } from 'react';
import { View, Text, StyleSheet, ActivityIndicator, Alert, Linking } from 'react-native';
import { WebView } from 'react-native-webview';
import { useCameraPermissions, useMicrophonePermissions } from 'expo-camera';

const MeetingScreen = ({ route, navigation }: any) => {
    const { link } = route.params;
    const [cameraPermission, requestCameraPermission] = useCameraPermissions();
    const [micPermission, requestMicPermission] = useMicrophonePermissions();

    const [isReady, setIsReady] = useState(false);

    useEffect(() => {
        (async () => {
            // 1. Запитуємо камеру
            const cameraStatus = await requestCameraPermission();

            // 2. Запитуємо мікрофон
            const micStatus = await requestMicPermission();

            if (cameraStatus.granted && micStatus.granted) {
                setIsReady(true);
            } else {
                Alert.alert(
                    "Потрібен дозвіл",
                    "Для відеозв'язку необхідний доступ до камери та мікрофону. Будь ласка, надайте дозволи в налаштуваннях.",
                    [{ text: "OK", onPress: () => navigation.goBack() }]
                );
            }
        })();
    }, []);

    if (!link) {
        return (
            <View style={styles.center}>
                <Text>Посилання на зустріч відсутнє</Text>
            </View>
        );
    }

    if (!isReady) {
        return (
            <View style={styles.center}>
                <ActivityIndicator size="large" color="#007AFF" />
                <Text style={{ marginTop: 10 }}>Отримуємо дозволи...</Text>
            </View>
        );
    }

    return (
        <View style={{ flex: 1 }}>
            <WebView
                source={{ uri: link }}
                style={{ flex: 1 }}
                // --- ВАЖЛИВІ НАЛАШТУВАННЯ ДЛЯ WEBRTC (ВІДЕО) ---
                javaScriptEnabled={true}
                domStorageEnabled={true}
                allowsInlineMediaPlayback={true}
                mediaPlaybackRequiresUserAction={false}
                startInLoadingState={true}
                // Дозвіл для Android WebView використовувати камеру
                androidLayerType="hardware"
                originWhitelist={['*']}
                // Обробка дозволів всередині WebView (Android специфіка)
                onPermissionRequest={(req) => {
                    req.grant(['camera', 'microphone']);
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: 'black' },
});

export default MeetingScreen;