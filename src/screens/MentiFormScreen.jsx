import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    ScrollView,
    ImageBackground,
    Animated,
} from 'react-native';
import InputField from '../components/InputField';
import CustomButton from '../components/CustomButton';
import Header from '../components/Header';
import useFadeIn from '../hooks/useFadeIn';

export default function MentiFormScreen({ onBack, onNext }) {
    const [name, setName] = useState('');
    const [goal, setGoal] = useState('');
    const [level, setLevel] = useState('');
    const fadeInForm = useFadeIn();

    return (
        <ImageBackground
            source={require('../assets/select-bg.png')}
            style={styles.bg}
            resizeMode="cover"
        >
            <View style={styles.overlay} />

            <View style={styles.screen}>
                <Header
                    title="Анкета менти"
                    step={1}
                    totalSteps={2}
                    onBack={onBack}
                />

                <Animated.View style={[styles.content, fadeInForm]}>
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
                            label="Ціль навчання"
                            placeholder="Що хочете вивчити?"
                            value={goal}
                            onChangeText={setGoal}
                        />

                        <InputField
                            label="Рівень"
                            placeholder="Junior / Middle / Beginner"
                            value={level}
                            onChangeText={setLevel}
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
