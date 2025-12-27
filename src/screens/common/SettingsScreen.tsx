import React from 'react';
import {
    View,
    Text,
    Switch,
    StyleSheet,
    TouchableOpacity,
    Alert,
    ScrollView,
} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useTheme } from '../../state/ThemeContext';
import { useAuth } from '../../state/AuthContext';
import { useNavigation } from '@react-navigation/native';

const SettingItem = ({
                         icon,
                         title,
                         value,
                         onPress,
                         isSwitch = false,
                         switchValue = false,
                         onSwitchChange,
                         color,
                         textColor,
                         subTextColor,
                         isDestructive = false
                     }: any) => (
    <TouchableOpacity
        style={[styles.itemContainer, { borderBottomColor: subTextColor + '20' }]}
        onPress={isSwitch ? undefined : onPress}
        disabled={isSwitch}
        activeOpacity={0.7}
    >
        <View style={styles.itemLeft}>
            <View style={[styles.iconBox, { backgroundColor: isDestructive ? '#FFEBEE' : color + '15' }]}>
                <Ionicons name={icon} size={20} color={isDestructive ? '#D32F2F' : color} />
            </View>
            <Text style={[styles.itemTitle, { color: isDestructive ? '#D32F2F' : textColor }]}>{title}</Text>
        </View>

        <View style={styles.itemRight}>
            {isSwitch ? (
                <Switch
                    value={switchValue}
                    onValueChange={onSwitchChange}
                    trackColor={{ false: "#767577", true: color }}
                    thumbColor={"#f4f3f4"}
                />
            ) : (
                <>
                    {value && <Text style={[styles.itemValue, { color: subTextColor }]}>{value}</Text>}
                    {!isDestructive && <Ionicons name="chevron-forward" size={20} color={subTextColor} />}
                </>
            )}
        </View>
    </TouchableOpacity>
);

const SettingsScreen: React.FC = () => {
    const { colors, isDark, toggleTheme } = useTheme();
    const { logout, userInfo } = useAuth();
    const navigation = useNavigation<any>();

    const handleLogout = () => {
        Alert.alert(
            "Вихід",
            "Ви впевнені, що хочете вийти з акаунту?",
            [
                { text: "Скасувати", style: "cancel" },
                {
                    text: "Вийти",
                    style: "destructive",
                    onPress: () => logout()
                }
            ]
        );
    };

    return (
        <View style={{ flex: 1, backgroundColor: colors.background }}>
            <ScrollView contentContainerStyle={styles.scrollContent}>

                <View style={styles.header}>
                    <View style={[styles.avatarContainer, { backgroundColor: colors.card, borderColor: colors.border }]}>
                        <Ionicons name="person" size={40} color={colors.primary} />
                    </View>
                    <Text style={[styles.userName, { color: colors.text }]}>
                        {userInfo?.name || 'Студент'}
                    </Text>
                    <Text style={[styles.userEmail, { color: colors.subText }]}>
                        {userInfo?.email || 'email@example.com'}
                    </Text>
                    <TouchableOpacity style={[styles.editProfileBadge, { backgroundColor: colors.primary }]}>
                        <Text style={styles.editProfileText}>Студент</Text>
                    </TouchableOpacity>
                </View>

                <Text style={[styles.sectionHeader, { color: colors.subText }]}>ОСНОВНІ</Text>
                <View style={[styles.section, { backgroundColor: colors.card }]}>
                    <SettingItem
                        icon="notifications-outline"
                        title="Сповіщення"
                        color={colors.primary}
                        textColor={colors.text}
                        subTextColor={colors.subText}
                        onPress={() => navigation.navigate('NotificationSettingsModal')}
                    />
                    <SettingItem
                        icon="globe-outline"
                        title="Мова"
                        value="Українська"
                        color="#FF9800"
                        textColor={colors.text}
                        subTextColor={colors.subText}
                        onPress={() => Alert.alert('Інфо', 'Зміна мови поки недоступна')}
                    />
                </View>

                <Text style={[styles.sectionHeader, { color: colors.subText }]}>ВИГЛЯД</Text>
                <View style={[styles.section, { backgroundColor: colors.card }]}>
                    <SettingItem
                        icon={isDark ? "moon" : "sunny"}
                        title="Темна тема"
                        isSwitch
                        switchValue={isDark}
                        onSwitchChange={toggleTheme}
                        color="#9C27B0"
                        textColor={colors.text}
                        subTextColor={colors.subText}
                    />
                </View>

                <Text style={[styles.sectionHeader, { color: colors.subText }]}>ПІДТРИМКА</Text>
                <View style={[styles.section, { backgroundColor: colors.card }]}>
                    <SettingItem
                        icon="help-buoy-outline"
                        title="Допомога"
                        color="#4CAF50"
                        textColor={colors.text}
                        subTextColor={colors.subText}
                        onPress={() => Alert.alert('Підтримка', 'Напишіть нам на support@menti.app')}
                    />
                    <SettingItem
                        icon="information-circle-outline"
                        title="Про додаток"
                        value="v1.0.0"
                        color="#607D8B"
                        textColor={colors.text}
                        subTextColor={colors.subText}
                        onPress={() => {}}
                    />
                </View>

                <View style={[styles.section, { backgroundColor: colors.card, marginTop: 20 }]}>
                    <SettingItem
                        icon="log-out-outline"
                        title="Вийти з акаунту"
                        isDestructive
                        color={colors.text}
                        textColor={colors.text}
                        subTextColor={colors.subText}
                        onPress={handleLogout}
                    />
                </View>

                <Text style={[styles.footerText, { color: colors.subText }]}>
                    Menti App © 2025
                </Text>

            </ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    scrollContent: {
        padding: 20,
        paddingBottom: 40,
    },

    header: {
        alignItems: 'center',
        marginBottom: 30,
    },
    avatarContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 10,
        borderWidth: 1,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 5,
    },
    userName: {
        fontSize: 22,
        fontWeight: 'bold',
        marginBottom: 4,
    },
    userEmail: {
        fontSize: 14,
        marginBottom: 10,
    },
    editProfileBadge: {
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 20,
    },
    editProfileText: {
        color: 'white',
        fontSize: 12,
        fontWeight: 'bold',
    },

    sectionHeader: {
        fontSize: 12,
        fontWeight: 'bold',
        marginBottom: 8,
        marginLeft: 10,
        opacity: 0.7,
    },
    section: {
        borderRadius: 12,
        overflow: 'hidden',
        marginBottom: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.05,
        shadowRadius: 2,
        elevation: 2,
    },

    itemContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingVertical: 12,
        paddingHorizontal: 16,
        borderBottomWidth: 0.5,
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconBox: {
        width: 32,
        height: 32,
        borderRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        marginRight: 12,
    },
    itemTitle: {
        fontSize: 16,
        fontWeight: '500',
    },
    itemRight: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    itemValue: {
        fontSize: 14,
        marginRight: 8,
    },

    footerText: {
        textAlign: 'center',
        fontSize: 12,
        marginTop: 10,
        opacity: 0.5,
    }
});

export default SettingsScreen;