import React from 'react';
import { Text, StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import BaseButton from './BaseButton';
import {
    BUTTON_GRADIENTS,
    BUTTON_SIZES,
} from '../theme/buttonTokens';

export default function GradientCustomButton({
                                                 title,
                                                 onPress,
                                                 size = 'lg',
                                                 gradient = 'primary',
                                                 style,
                                             }) {
    const sizeToken = BUTTON_SIZES[size];
    const colors = BUTTON_GRADIENTS[gradient];

    return (
        <BaseButton
            onPress={onPress}
            size={size}
            style={style}
            background={
                <LinearGradient
                    colors={colors}
                    start={{ x: 0, y: 0 }}
                    end={{ x: 1, y: 0 }}
                    style={StyleSheet.absoluteFill}
                />
            }
        >
            <Text
                style={[
                    styles.text,
                    { fontSize: sizeToken.fontSize },
                ]}
            >
                {title}  →
            </Text>
        </BaseButton>
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: '700',
        color: '#fff',
    },
});
