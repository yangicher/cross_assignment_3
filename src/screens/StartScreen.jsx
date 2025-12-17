import React from 'react';
import { View, Text, StyleSheet, Image, ImageBackground, useWindowDimensions } from 'react-native';
import CustomButton from '../components/CustomButton';
import { colors } from '../theme/colors';
import GradientCustomButton from "../components/GradientCustomButton";

export default function StartScreen({ onStartPress, onLoginPress }) {
    const { width, height } = useWindowDimensions();
    const isLandscape = width > height;

    const contentMaxWidth = Math.min(width, 420);
    const bottomPadding = Math.max(18, height * 0.04);

    return (
        <View style={styles.container}>
            {/* Background image */}
            <ImageBackground
                source={require('../assets/start-bg.png')}
                style={styles.bg}
                resizeMode="cover"
            >
                <View style={styles.overlay} />
            </ImageBackground>


            {/* Overlay */}
            <View style={styles.overlay} />

            {/* Content */}
            <View
                style={[
                    styles.content,
                    { maxWidth: contentMaxWidth, paddingBottom: bottomPadding },
                    isLandscape && { justifyContent: 'center' },
                ]}
            >
                <View>
                    <Image
                        source={require('../assets/logo.png')}
                        style={styles.logo}
                    />

                    <Text style={styles.tagline}>З ментором легше</Text>
                </View>

                <View style={{ height: 18 }} />

                <GradientCustomButton
                    title="Розпочати"
                    size="lg"
                    gradient="primary"
                    onPress={onStartPress}
                />

                <CustomButton
                    title="Вже маєте обліковий запис? Увійти"
                    size="lg"
                    variant="ghost"
                    onPress={onLoginPress}
                    style={{ marginTop: 12 }}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: colors.bg },
    bg: {
        ...StyleSheet.absoluteFillObject,
        width: undefined,
        height: undefined,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: colors.overlay,
    },
    content: {
        flex: 1,
        alignSelf: 'center',
        width: '100%',
        paddingHorizontal: 20,
        justifyContent: 'flex-end',
    },
    logo: {
        width: 120,
        height: 40,
        resizeMode: 'contain',
        marginBottom: 8,
    },
    tagline: {
        marginTop: 6,
        fontSize: 14,
        fontWeight: '600',
        color: colors.muted,
    },
});