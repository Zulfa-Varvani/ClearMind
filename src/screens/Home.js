import React, { useContext } from 'react';
import { View, Image, Text, StyleSheet, TouchableOpacity } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import { CountContext } from '../contexts/count';

export default ({ navigation }) => {
    const { setCount } = useContext(CountContext);
    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Menu</Text>
                <View style={{ flexDirection: 'column', flex: 1, marginTop: 80, maxHeight: 180 }}>
                    <MenuItem onPress={() => {navigation.navigate('Music'); setCount(prev => (prev + 10));}} image={require('../../assets/games.png')} text='Want to play some music? Play a game? You can earn points!!' />
                    <MenuItem onPress={() => {navigation.navigate('Resources'); setCount(prev => (prev + 10));}} image={require('../../assets/resources.png')} text='Got some resources you should check out! Accessing them also gets you points!' />
                    <MenuItem onPress={() => {navigation.navigate('Chat'); setCount(prev => (prev + 10));}} image={require('../../assets/chat.png')} text='Hey there! Want to talk? I’m always here for you (I can also get you some extra points!)' />
                    <MenuItem onPress={() => {navigation.navigate('Data'); setCount(prev => (prev + 10));}} image={require('../../assets/progress.png')} text='Want to see your progress? Check it here! You can also answer your monthly questionairre here.' />
                </View>
            </View>
        </BackgroundGradient>
    );
}

const MenuItem = ({ image, text, onPress }) => (
    <TouchableOpacity onPress={onPress} style={{flexDirection: "row", flex: 1, minHeight: 100}}>
        <Image source={image} style={styles.image}/>
        <Text style={[styles.textDescrp, { width: 180 }]}>{text}</Text>
    </TouchableOpacity>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        padding: 40
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    image: {
        width: 80,
        height: 65,
        marginRight: 30
    },
    text: {
        color: "#000000a0",
        fontSize: 15,
        textAlign: "center",
    },
});