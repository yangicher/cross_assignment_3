import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';

import MentorTabNavigator from './MentorTabNavigator';
import MentiTabNavigator from './MentiTabNavigator';

import MentorsNavigator from './MentorsNavigator';

export type AppDrawerParamList = {
    MainTabs: undefined;
    MentorsFlow: undefined;
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
            <Drawer.Screen
                name="MentorsFlow"
                component={MentorsNavigator}
                options={{ title: 'Знайти ментора' }}
            />
        </Drawer.Navigator>
    );
}