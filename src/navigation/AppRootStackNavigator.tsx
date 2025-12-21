import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import AppDrawerNavigator from './AppDrawerNavigator';
import NotificationSettingsScreen from '../screens/common/NotificationSettingsScreen';

export type AppRootStackParamList = {
    AppDrawer: undefined;
    NotificationSettingsModal: undefined;
};

const Stack = createNativeStackNavigator<AppRootStackParamList>();

export default function AppRootStackNavigator() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="AppDrawer" component={AppDrawerNavigator} />
            <Stack.Screen
                name="NotificationSettingsModal"
                component={NotificationSettingsScreen}
                options={{
                    presentation: 'modal',
                    animation: 'slide_from_bottom',
                    gestureEnabled: true,
                }}
            />
        </Stack.Navigator>
    );
}