import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { Mentor } from '../models/Mentor';

import MentorDetailsScreen from '../screens/MentorDetailsScreen';
import MentorsListTabScreen from "../screens/menti/MentorsListTabScreen.tsx";

export type MentorsStackParamList = {
    MentorsList: undefined;
    MentorDetails: { mentor: Mentor };
};

const Stack = createNativeStackNavigator<MentorsStackParamList>();

export default function MentorsNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="MentorsList"
                component={MentorsListTabScreen}
                options={{ title: 'Ментори', headerBackTitle: 'Назад' }}
            />
            <Stack.Screen
                name="MentorDetails"
                component={MentorDetailsScreen}
                options={{ title: 'Профіль' }}
            />
        </Stack.Navigator>
    );
}