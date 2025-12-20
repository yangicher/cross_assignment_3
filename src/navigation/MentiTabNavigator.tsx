import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MentiHomeScreen from '../screens/menti/MentiHomeScreen';
import MentiCalendarScreen from '../screens/menti/MentiCalendarScreen';
import MessagesScreen from '../screens/common/MessagesScreen';
import ProfileScreen from '../screens/common/ProfileScreen';
import SettingsScreen from '../screens/menti/SettingsScreen';

export type MentiTabParamList = {
    Home: undefined;
    Calendar: undefined;
    Messages: undefined;
    Profile: undefined;
    Settings: undefined;
};

const Tab = createBottomTabNavigator<MentiTabParamList>();

export default function MentiTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={MentiHomeScreen} />
            <Tab.Screen name="Calendar" component={MentiCalendarScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
            <Tab.Screen name="Settings" component={SettingsScreen} />
        </Tab.Navigator>
    );
}
