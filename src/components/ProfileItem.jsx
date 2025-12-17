import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProfileItem({ label, value }) {
    return (
        <View style={styles.row}>
            <Text style={styles.label}>{label}</Text>
            <Text style={styles.value}>{value}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    row: {
        paddingVertical: 14,
        borderBottomWidth: 1,
        borderBottomColor: '#E5E5EA',
    },
    label: {
        fontSize: 12,
        color: '#8E8E93',
        marginBottom: 4,
    },
    value: {
        fontSize: 15,
        color: '#111',
    },
});
