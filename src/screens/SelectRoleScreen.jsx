import React, { useRef, useEffect } from 'react';
import {
    View,
    Text,
    StyleSheet,
    ImageBackground,
    Animated,
} from 'react-native';
import Header from '../components/Header';
import RoleCard from '../components/RoleCard';

export default function SelectRoleScreen({ onSelect, onBack }) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    return (
        <ImageBackground
            source={require('../assets/select-bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.screen}>
                {/* HEADER */}
                <Header title="Оберіть роль" onBack={onBack} />

                {/* FADE-IN CONTENT */}
                <Animated.View
                    style={[
                        styles.content,
                        {
                            opacity,
                            transform: [
                                {
                                    translateY: opacity.interpolate({
                                        inputRange: [0, 1],
                                        outputRange: [12, 0],
                                    }),
                                },
                            ],
                        },
                    ]}
                >
                    <Text style={styles.subtitle}>
                        Ви завжди зможете змінити її пізніше
                    </Text>

                    <View style={styles.cards}>
                        <RoleCard
                            title="MENTOR"
                            description="Ділитись досвідом та допомагати іншим"
                            onPress={() => onSelect('mentor')}
                        />

                        <RoleCard
                            title="MENTI"
                            description="Знайти ментора та розвиватись"
                            onPress={() => onSelect('menti')}
                        />
                    </View>
                </Animated.View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: {
        flex: 1,
    },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.15)',
    },
    screen: {
        flex: 1,
    },
    content: {
        flex: 1,
        paddingHorizontal: 20,
        paddingTop: 24,
        justifyContent: 'center',
    },
    subtitle: {
        textAlign: 'center',
        fontSize: 14,
        color: 'rgba(255,255,255,0.85)',
        marginBottom: 32,
    },
    cards: {
        alignItems: 'center',
    },
});
