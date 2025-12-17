import { useRef, useEffect } from 'react';
import { Animated } from 'react-native';

export default function useFadeIn({
                                      duration = 450,
                                      offset = 12,
                                      delay = 0,
                                  } = {}) {
    const opacity = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.timing(opacity, {
            toValue: 1,
            duration,
            delay,
            useNativeDriver: true,
        }).start();
    }, [opacity, duration, delay]);

    const animatedStyle = {
        opacity,
        transform: [
            {
                translateY: opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [offset, 0],
                }),
            },
        ],
    };

    return animatedStyle;
}
