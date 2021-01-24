import React, { useState, useContext } from 'react';
import { StyleSheet, View, Text, TextInput, KeyboardAvoidingView, ScrollView, Platform } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import AppButton from '../components/AppButton';
import { CountContext } from '../contexts/count';

export default ({navigation}) => {
    const { setCount } = useContext(CountContext);
    const [state, setState] = useState({
        name:'',
        email: '',
        password: ''
    });

    const handleButtonClick = () => {
        navigation.navigate('Welcome');
        setCount(prev => (prev + 1) * 50);
    };

    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Sign Up</Text>
                <ScrollView 
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps='handled'
                >
                    <KeyboardAvoidingView
                        behavior={Platform.OS == 'ios' ? 'padding' : 'height'}
                        style={{ flex: 1, paddingTop: 100 }}>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="NAME"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setState({ name: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                style={styles.inputText}
                                placeholder="EMAIL"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setState({ email: text })} />
                        </View>
                        <View style={styles.inputView} >
                            <TextInput
                                secureTextEntry
                                style={styles.inputText}
                                placeholder="PASSWORD"
                                placeholderTextColor="#003f5c"
                                onChangeText={text => setState({ password: text })} />
                        </View>
                        <View>
                            <Text style={styles.text}>
                            By creating your account, your information will be sent to a medical professional (whom you will be automatically paired with). You will be able to access all your data and any evaluations your professional makes. Please note: only your name and email will be sent to the medical professional.
                            </Text>
                        </View>
                        <AppButton onPress={handleButtonClick}  title="Create account" fontSize={20} backgroundColor="#007bff" />
                    </KeyboardAvoidingView>
                </ScrollView>
            </View>
        </BackgroundGradient>
    )
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        padding: 20
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 50,
        fontWeight: "bold",
        textAlign: "center",
    },
    text: {
        color: "#000000a0",
        fontSize: 15,
        textAlign: "center",
        margin: 30
    },
    inputView: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        margin: 10,
    },
    inputText: {
        height: 30,
        fontSize: 16
    },
    loginText: {
        color: "white",
        fontSize: 20
    }
});
