import React from 'react';
import { Text, StyleSheet, View } from 'react-native';
import BaseButton from './BaseButton';
import { BUTTON_VARIANTS, BUTTON_SIZES } from '../theme/buttonTokens';

export default function CustomButton({
                                         title,
                                         onPress,
                                         size = 'lg',
                                         variant = 'primary',
                                         style,
                                     }) {
    const variantToken = BUTTON_VARIANTS[variant];
    const sizeToken = BUTTON_SIZES[size];

    return (
        <BaseButton
            onPress={onPress}
            size={size}
            style={style}
            background={
                <View
                    style={[
                        styles.background,
                        {
                            backgroundColor: variantToken.background,
                            borderColor: variantToken.borderColor,
                            borderWidth: variant === 'ghost' ? 1 : 0,
                        },
                    ]}
                />
            }
        >
            <Text
                style={[
                    styles.text,
                    {
                        color: variantToken.text,
                        fontSize: sizeToken.fontSize,
                    },
                ]}
            >
                {title}  →
            </Text>
        </BaseButton>
    );
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
    },
    text: {
        fontWeight: '700',
    },
});
