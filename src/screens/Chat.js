import React from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import ChatBot from '../components/ChatBot/ChatBot';

const ChatFile = require('../../assets/chatbot.json');

export default () => (
    <BackgroundGradient>
        <View style={styles.container}>
            <Text style={styles.textTitle}>ChatBot!</Text>
            <ChatBot
                ChatBotID='CareBot'
                showHeader={false}
                questions={ChatFile.chatbot}
                chatHeader={(new Date()).toDateString()}
            />
        </View>
    </BackgroundGradient>
);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 30
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        paddingBottom: 100
    },
});