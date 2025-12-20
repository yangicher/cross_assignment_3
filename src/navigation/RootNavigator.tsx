import React from 'react';
import { NavigationContainer } from '@react-navigation/native';

import AuthStackNavigator from './AuthStackNavigator';
import MentorTabNavigator from './MentorTabNavigator';
import MentiTabNavigator from './MentiTabNavigator';

import { useAuth } from '../state/AuthContext';

export default function RootNavigator() {
    const { isLoggedIn, role } = useAuth();

    return (
        <NavigationContainer>
            {!isLoggedIn && <AuthStackNavigator />}

            {isLoggedIn && role === 'mentor' && <MentorTabNavigator />}

            {isLoggedIn && role === 'menti' && <MentiTabNavigator />}
        </NavigationContainer>
    );
}
