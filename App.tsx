import React, { useState } from 'react';
import { View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';

import StartScreen from './src/screens/StartScreen';
import SelectRoleScreen from './src/screens/SelectRoleScreen';
import MentorFormScreen from './src/screens/MentorFormScreen';
import MentiFormScreen from './src/screens/MentiFormScreen';

const App = () => {
    const [screen, setScreen] = useState<
        'start' | 'select' | 'mentor' | 'menti'
    >('start');

    return (
        <SafeAreaProvider>
            <View style={{ flex: 1 }}>
                {screen === 'start' && (
                    <StartScreen onStartPress={() => setScreen('select')} onLoginPress={() => console.log('login')} />
                )}

                {screen === 'select' && (
                    <SelectRoleScreen
                        onBack={() => setScreen('start')}
                        onSelect={(role: 'mentor' | 'menti') => setScreen(role)}
                    />
                )}

                {screen === 'mentor' && (
                    <MentorFormScreen
                        onBack={() => setScreen('select')}
                        onNext={() => console.log('mentor next')}
                    />
                )}

                {screen === 'menti' && (
                    <MentiFormScreen
                        onBack={() => setScreen('select')}
                        onNext={() => console.log('menti next')}
                    />
                )}
            </View>
        </SafeAreaProvider>
    );
};

export default App;
