import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import AppButton from '../components/AppButton';
import { CountContext } from '../contexts/count';

export default ({navigation}) => {
    const { setCount } = useContext(CountContext);
    const handleButtonClickOne = () => {
        Linking.openURL('https://www.youtube.com/playlist?list=PLoJmb2dXdvAvq2ZVYJQSTzNizPACHZ5kI');
        setCount(prev => (prev + 50));
    };
    const handleButtonClickTwo = () => {
        Linking.openURL('https://docs.google.com/document/d/10iOD7Wy_YU4NmkPU7ZH7YTrq11qJAANjZZ0PAotKhR8/preview?fbclid=IwAR3d6gte-hUx3d0-Bo5VBurCw8BarV-3artzK4DMmf7sbWJM9XoGgrFvqKo');
        setCount(prev => (prev + 50));
    };
    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Music & Games</Text>
                <View style={styles.textView}>
                    <Text style={styles.textSubTitle}>Music</Text>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
                </View>
                <Text style={styles.text}>Did you know music helps you get back on track when you feel down, anxious or tired? Listen to our curated playlist, specially chosen for you!</Text>
                <AppButton onPress={handleButtonClickOne} title="Go to music" fontSize={15} backgroundColor="#007bff" />
                <View style={styles.textView}>
                    <Text style={styles.textSubTitle}>Games</Text>
                    <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
                </View>
                <Text style={styles.text}>Feeling bored or maybe stressed out? These games will help you, scientifically proven to make you smile :)</Text>
                <AppButton onPress={handleButtonClickTwo} title="Go to games" fontSize={15} backgroundColor="#007bff" />
            </View>
        </BackgroundGradient>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 30
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center"
    },
    textView: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginTop: 70,
        marginBottom: 20
    },
    textSubTitle: {
        color: "#000000a0",
        fontSize: 30,
        fontWeight: "bold",
        textAlign: "left",
        height: 30
    },
    text: {
        color: "#000000a0",
        fontSize: 16,
        textAlign: "center",
        paddingBottom: 20
    }
});