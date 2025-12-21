import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MentorTabNavigator from './MentorTabNavigator';
import MentiTabNavigator from './MentiTabNavigator';

export type AppDrawerParamList = {
    MainTabs: undefined;
};

const Drawer = createDrawerNavigator<AppDrawerParamList>();

type Props = {
    role: 'mentor' | 'menti';
};

export default function AppDrawerNavigator({ role }: Props) {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                //gestureEnabled: true,
                swipeEdgeWidth: 32,
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={role === 'mentor' ? MentorTabNavigator : MentiTabNavigator}
            />
        </Drawer.Navigator>
    );
}