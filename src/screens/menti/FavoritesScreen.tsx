import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import { useAppSelector } from '../../store/hooks';
import MentorListItem from '../../components/MentorListItem';
import { useTheme } from '../../state/ThemeContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { MentorsStackParamList } from '../../navigation/MentorsNavigator';

type Props = NativeStackScreenProps<MentorsStackParamList, 'Favorites'>;

const FavoritesScreen: React.FC<Props> = ({ navigation }) => {
    const { colors } = useTheme();
    const favorites = useAppSelector((state) => state.mentors.favorites);

    return (
        <View style={[styles.container, { backgroundColor: colors.background }]}>
            {favorites.length === 0 ? (
                <View style={styles.center}>
                    <Text style={{ color: colors.subText, fontSize: 16 }}>
                        У вас поки немає обраних менторів 💔
                    </Text>
                </View>
            ) : (
                <FlatList
                    data={favorites}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <MentorListItem
                            mentor={item}
                            onPress={() => navigation.navigate('MentorDetails', { mentor: item })}
                        />
                    )}
                    contentContainerStyle={styles.list}
                />
            )}
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1 },
    list: { padding: 16 },
    center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
});

export default FavoritesScreen;