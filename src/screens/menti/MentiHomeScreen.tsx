import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
    Image
} from 'react-native';
import { useAuth } from '../../state/AuthContext';
import { useTheme } from '../../state/ThemeContext';
import { Ionicons } from '@expo/vector-icons';

const MentiHomeScreen = ({ navigation }: any) => {
    const { userInfo } = useAuth();
    const { colors, isDark } = useTheme();

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            <ScrollView contentContainerStyle={styles.scrollContent}>
                <View style={styles.heroSection}>
                    { <Image source={require('../../assets/logo.png')} style={styles.logo} /> }

                    {/*<View style={[styles.logoPlaceholder, { backgroundColor: isDark ? '#1E2A38' : '#e3f2fd' }]}>*/}
                    {/*    <Ionicons name="school" size={60} color={colors.primary} />*/}
                    {/*</View>*/}

                    <Text style={[styles.greeting, { color: colors.text }]}>
                        Привіт, {userInfo?.name || 'Студент'}! 👋
                    </Text>
                    <Text style={[styles.subtitle, { color: colors.subText }]}>
                        Готовий до нових знань? Знайди свого ідеального ментора вже сьогодні.
                    </Text>
                </View>

                <View style={styles.actionsContainer}>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.text }]}
                        onPress={() => navigation.navigate('Mentors')}
                    >
                        <View style={[styles.iconCircle, { backgroundColor: '#e8f5e9' }]}>
                            <Ionicons name="search" size={32} color="#4CAF50" />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={[styles.cardTitle, { color: colors.text }]}>Знайти ментора</Text>
                            <Text style={[styles.cardDescription, { color: colors.subText }]}>
                                Переглянь список експертів та обери свого викладача
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color={colors.subText} />
                    </TouchableOpacity>

                    <TouchableOpacity
                        style={[styles.card, { backgroundColor: colors.card, shadowColor: colors.text }]}
                        onPress={() => navigation.navigate('Calendar')}
                    >
                        <View style={[styles.iconCircle, { backgroundColor: '#fff3e0' }]}>
                            <Ionicons name="calendar" size={32} color="#FF9800" />
                        </View>
                        <View style={styles.cardTextContainer}>
                            <Text style={[styles.cardTitle, { color: colors.text }]}>Мій розклад</Text>
                            <Text style={[styles.cardDescription, { color: colors.subText }]}>
                                Перевірка найближчих уроків та історія занять
                            </Text>
                        </View>
                        <Ionicons name="chevron-forward" size={24} color={colors.subText} />
                    </TouchableOpacity>

                </View>

                <View style={[styles.infoBlock, { backgroundColor: isDark ? '#2C2C2C' : '#F5F5F5' }]}>
                    <Ionicons name="bulb-outline" size={24} color={colors.primary} style={{marginBottom: 10}}/>
                    <Text style={[styles.infoText, { color: colors.subText }]}>
                        "Інвестиція в знання завжди дає найкращі відсотки."
                    </Text>
                    <Text style={[styles.infoAuthor, { color: colors.subText }]}>— Бенджамін Франклін</Text>
                </View>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContent: {
        padding: 20,
        paddingTop: 40,
    },

    heroSection: {
        alignItems: 'center',
        marginBottom: 40,
    },
    logo: {
        width: 100,
        height: 100,
        marginBottom: 20,
        resizeMode: 'contain',
    },
    logoPlaceholder: {
        width: 100,
        height: 100,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
    },
    greeting: {
        fontSize: 28,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 10,
    },
    subtitle: {
        fontSize: 16,
        textAlign: 'center',
        paddingHorizontal: 20,
        lineHeight: 24,
    },

    actionsContainer: {
        marginBottom: 30,
    },
    card: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 20,
        marginBottom: 15,
        borderRadius: 16,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 3,
    },
    iconCircle: {
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 15,
    },
    cardTextContainer: {
        flex: 1,
    },
    cardTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    cardDescription: {
        fontSize: 13,
    },

    infoBlock: {
        padding: 25,
        borderRadius: 16,
        alignItems: 'center',
    },
    infoText: {
        fontSize: 16,
        fontStyle: 'italic',
        textAlign: 'center',
        marginBottom: 10,
    },
    infoAuthor: {
        fontSize: 14,
        fontWeight: 'bold',
    }
});

export default MentiHomeScreen;