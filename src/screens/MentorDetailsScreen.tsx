import React, { useEffect, useLayoutEffect } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, Button, TouchableOpacity } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MentorsStackParamList } from '../navigation/MentorsNavigator';
import { useTheme } from '../state/ThemeContext';

import { useAppDispatch, useAppSelector } from '../store/hooks';
import { toggleFavorite } from '../store/slices/mentorsSlice';

type Props = NativeStackScreenProps<MentorsStackParamList, 'MentorDetails'>;

const MentorDetailsScreen: React.FC<Props> = ({ route, navigation }) => {
    const { mentor } = route.params;
    const { colors } = useTheme();
    const dispatch = useAppDispatch();

    const isFavorite = useAppSelector((state) =>
        state.mentors.favorites.some((m) => m.id === mentor.id)
    );

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <TouchableOpacity onPress={() => dispatch(toggleFavorite(mentor))}>
                    <Text style={{ fontSize: 24 }}>
                        {isFavorite ? '❤️' : '🤍'}
                    </Text>
                </TouchableOpacity>
            ),
        });
    }, [navigation, isFavorite, mentor, dispatch]);

    return (
        <ScrollView contentContainerStyle={[styles.container, { backgroundColor: colors.background }]}>
            <Image source={{ uri: mentor.largeAvatar }} style={styles.avatar} />

            <Text style={[styles.name, { color: colors.text }]}>{mentor.fullName}</Text>
            <Text style={[styles.location, { color: colors.subText }]}>📍 {mentor.location}</Text>

            <TouchableOpacity
                style={[styles.favButton, { borderColor: colors.primary }]}
                onPress={() => dispatch(toggleFavorite(mentor))}
            >
                <Text style={{ color: colors.primary, fontWeight: 'bold' }}>
                    {isFavorite ? 'Видалити з обраного' : 'Додати в обране'}
                </Text>
            </TouchableOpacity>

            <View style={[styles.card, { backgroundColor: colors.card }]}>
                <Text style={{ color: colors.text }}>Email: {mentor.email}</Text>
                <Text style={{ color: colors.text }}>Phone: {mentor.phone}</Text>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: { alignItems: 'center', padding: 20, flexGrow: 1 },
    avatar: { width: 150, height: 150, borderRadius: 75, marginBottom: 20 },
    name: { fontSize: 24, fontWeight: 'bold', marginBottom: 5 },
    location: { fontSize: 16, marginBottom: 20 },
    card: { width: '100%', padding: 20, borderRadius: 10, marginTop: 20 },
    favButton: {
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        borderWidth: 1,
        marginTop: 10,
    }
});

export default MentorDetailsScreen;