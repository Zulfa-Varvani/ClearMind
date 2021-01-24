import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

TouchableOpacity.defaultProps = { activeOpacity: 0.8 };

export default ({ onPress, title, fontSize }) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonContainer}>
        <Text style={[styles.appButtonText, {fontSize: fontSize}]}>{title}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    appButtonContainer: {
        elevation: 8,
        backgroundColor: "#F9B63D",
        borderRadius: 50,
        paddingVertical: 10,
        paddingHorizontal: 12
    },
    appButtonText: {
        fontSize: 36,
        color: "#000000",
        fontWeight: "bold",
        alignSelf: "center"
    }
});