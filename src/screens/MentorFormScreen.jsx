import React, { useState, useRef, useEffect } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Animated,
} from 'react-native';
import Header from '../components/Header';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';

export default function MentorFormScreen({ onBack, onNext }) {
    const [name, setName] = useState('');
    const [position, setPosition] = useState('');
    const [experience, setExperience] = useState('');

    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration: 450,
            useNativeDriver: true,
        }).start();
    }, [opacity]);

    // ✅ RETURN — після всіх hooks
    return (
        <ImageBackground
            source={require('../assets/select-bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.screen}>
                <Header
                    title="Анкета ментора"
                    step={1}
                    totalSteps={2}
                    onBack={onBack}
                />

                <Animated.View
                    style={[
                        styles.animatedContent,
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
                    <ScrollView
                        contentContainerStyle={styles.content}
                        showsVerticalScrollIndicator={false}
                    >
                        <InputField
                            label="Імʼя"
                            placeholder="Ваше імʼя"
                            value={name}
                            onChangeText={setName}
                        />

                        <InputField
                            label="Посада"
                            placeholder="Наприклад, Senior Frontend"
                            value={position}
                            onChangeText={setPosition}
                        />

                        <InputField
                            label="Досвід"
                            placeholder="Наприклад, 5 років"
                            value={experience}
                            onChangeText={setExperience}
                        />

                        <CustomButton
                            title="Продовжити"
                            onPress={onNext}
                            style={{ marginTop: 24 }}
                        />
                    </ScrollView>
                </Animated.View>
            </View>
        </ImageBackground>
    );
}

const styles = StyleSheet.create({
    bg: { flex: 1 },
    overlay: {
        ...StyleSheet.absoluteFillObject,
        backgroundColor: 'rgba(0,0,0,0.12)',
    },
    screen: { flex: 1 },
    animatedContent: { flex: 1 },
    content: {
        padding: 20,
        paddingBottom: 40,
    },
});