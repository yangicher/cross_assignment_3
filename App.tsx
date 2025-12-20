import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';  // Add if missing
import { AuthProvider } from './src/state/AuthContext';
import RootNavigator from './src/navigation/RootNavigator';

export default function App() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>  // Add this as the outermost wrapper
            <SafeAreaProvider>
                <AuthProvider>
                    <RootNavigator />
                </AuthProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}