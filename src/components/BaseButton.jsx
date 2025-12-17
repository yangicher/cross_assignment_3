import React from 'react';
import {
    TouchableOpacity,
    StyleSheet,
    Platform,
    View,
} from 'react-native';
import { BUTTON_SIZES } from '../theme/buttonTokens';

export default function BaseButton({
                                       onPress,
                                       size = 'lg',
                                       style,
                                       background,
                                       children,
                                   }) {
    const sizeToken = BUTTON_SIZES[size];

    return (
        <TouchableOpacity
            activeOpacity={0.85}
            onPress={onPress}
            style={[
                styles.base,
                { borderRadius: sizeToken.radius },
                style,
            ]}
        >
            {/* background layer */}
            <View style={styles.background}>
                {background}
            </View>

            {/* content */}
            <View
                style={[
                    styles.content,
                    { paddingVertical: sizeToken.paddingVertical },
                ]}
            >
                {children}
            </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    base: {
        overflow: 'hidden',
        ...Platform.select({
            ios: {
                shadowOpacity: 0.18,
                shadowRadius: 10,
                shadowOffset: { width: 0, height: 8 },
            },
            android: { elevation: 5 },
        }),
    },
    background: {
        ...StyleSheet.absoluteFillObject,
    },
    content: {
        alignItems: 'center',
        justifyContent: 'center',
    },
});
