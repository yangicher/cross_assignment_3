import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

// import HomeScreen from '../screens/HomeScreen';
// import ScheduleScreen from '../screens/ScheduleScreen';
// import MenteesScreen from '../screens/MenteesScreen';
// import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

export default function TabNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Tab.Screen name="Home" component={DummyScreen} />
            <Tab.Screen name="Mentees" component={DummyScreen} />
            <Tab.Screen name="Schedule" component={DummyScreen} />
            <Tab.Screen name="Profile" component={DummyScreen} />
        </Tab.Navigator>
    );
}
function DummyScreen() {
    return null;
}
