import React, { useRef } from 'react';
import {
    Text,
    StyleSheet,
    TouchableWithoutFeedback,
    Animated,
    useWindowDimensions,
} from 'react-native';

export default function RoleCard({ title, description, onPress }) {
    const { width } = useWindowDimensions();
    const cardWidth = Math.min(width * 0.85, 360);

    const scale = useRef(new Animated.Value(1)).current;

    const pressIn = () => {
        Animated.spring(scale, {
            toValue: 0.96,
            useNativeDriver: true,
            speed: 30,
            bounciness: 0,
        }).start();
    };

    const pressOut = () => {
        Animated.spring(scale, {
            toValue: 1,
            useNativeDriver: true,
            speed: 30,
            bounciness: 0,
        }).start();
    };

    return (
        <TouchableWithoutFeedback
            onPress={onPress}
            onPressIn={pressIn}
            onPressOut={pressOut}
        >
            <Animated.View
                style={[
                    styles.card,
                    { width: cardWidth, transform: [{ scale }] },
                ]}
            >
                <Text style={styles.title}>{title}</Text>
                <Text style={styles.description}>{description}</Text>
            </Animated.View>
        </TouchableWithoutFeedback>
    );
}

const styles = StyleSheet.create({
    card: {
        backgroundColor: 'rgba(255,255,255,0.92)',
        borderRadius: 22,
        padding: 20,
        marginBottom: 20,
    },
    title: {
        fontSize: 18,
        fontWeight: '800',
        color: '#111',
        letterSpacing: 1,
    },
    description: {
        marginTop: 12,
        fontSize: 13,
        color: '#444',
    },
});
