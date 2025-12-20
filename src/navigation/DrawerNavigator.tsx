import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import TabNavigator from './TabNavigator';
//import ProfileScreen from '../screens/ProfileScreen';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
    return (
        <Drawer.Navigator
            screenOptions={{
                headerShown: false,
                swipeEnabled: true, // 👈 жести
            }}
        >
            <Drawer.Screen
                name="MainTabs"
                component={TabNavigator}
                options={{ title: 'Головне' }}
            />

            {/*<Drawer.Screen
                name="Support"
                component={ProfileScreen}
                options={{ title: 'Підтримка' }}
            />*/}
        </Drawer.Navigator>
    );
}
