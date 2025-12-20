import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import HomeScreen from '../screens/HomeScreen';
import MentorFormScreen from '../screens/MentorFormScreen';
import MentiFormScreen from '../screens/MentiFormScreen';

export type HomeStackParamList = {
    HomeMain: undefined;
    MentorForm: { step: number; totalSteps: number };
    MentiForm: { step: number; totalSteps: number };
};

const Stack = createNativeStackNavigator<HomeStackParamList>();

export default function HomeStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="HomeMain" component={DummyScreen} />
            <Stack.Screen name="MentorForm" component={MentorFormScreen} />
            <Stack.Screen name="MentiForm" component={MentiFormScreen} />
        </Stack.Navigator>
    );
}
function DummyScreen() {
    return null;
}
