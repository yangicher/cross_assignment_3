import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MentorDetailsScreen from '../screens/MentorDetailsScreen';
import FavoritesScreen from '../screens/menti/FavoritesScreen';
import { Mentor } from '../models/Mentor';
import MentorsListTabScreen from "../screens/menti/MentorsListTabScreen.tsx";

export type MentorsStackParamList = {
    MentorsList: undefined;
    MentorDetails: { mentor: Mentor };
    Favorites: undefined;
};

const Stack = createNativeStackNavigator<MentorsStackParamList>();

export default function MentorsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MentorsList"
                component={MentorsListTabScreen}
                options={{ title: 'Ментори' }}
            />
            <Stack.Screen
                name="MentorDetails"
                component={MentorDetailsScreen}
                options={{ title: 'Профіль' }}
            />
            <Stack.Screen
                name="Favorites"
                component={FavoritesScreen}
                options={{ title: 'Обрані ментори' }}
            />
        </Stack.Navigator>
    );
}