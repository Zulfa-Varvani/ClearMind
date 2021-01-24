import React from 'react';
import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import AppButton from '../components/AppButton';

export default ({ navigation }) => {
    const handleButtonClick = () => {
        navigation.navigate('Login');
    };

    return (
        <ImageBackground source={require('../../assets/sunset.jpg')} style={styles.image}>
            <View style={styles.container}>
                <Text style={styles.textTitle}>CLRmind</Text>
                <AppButton onPress={handleButtonClick} title="Get started!" fontSize={40} backgroundColor="#007bff" />
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 30
    },
    image: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        opacity: 0.8
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 70,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1
    },
});
