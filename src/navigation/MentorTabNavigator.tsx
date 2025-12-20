import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import MentorHomeScreen from '../screens/mentor/MentorHomeScreen';
import MentorScheduleScreen from '../screens/mentor/MentorScheduleScreen';
import MessagesScreen from '../screens/common/MessagesScreen';
import ProfileScreen from '../screens/common/ProfileScreen';

export type MentorTabParamList = {
    Home: undefined;
    Schedule: undefined;
    Messages: undefined;
    Profile: undefined;
};

const Tab = createBottomTabNavigator<MentorTabParamList>();

export default function MentorTabNavigator() {
    return (
        <Tab.Navigator screenOptions={{ headerShown: false }}>
            <Tab.Screen name="Home" component={MentorHomeScreen} />
            <Tab.Screen name="Schedule" component={MentorScheduleScreen} />
            <Tab.Screen name="Messages" component={MessagesScreen} />
            <Tab.Screen name="Profile" component={ProfileScreen} />
        </Tab.Navigator>
    );
}
