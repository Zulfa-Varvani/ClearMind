import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import MainScreen from '../screens/Main';
import LoginScreen from '../screens/Login';
import WelcomeScreen from '../screens/Welcome';
import HomeNavigator from './home';

const Stack = createStackNavigator();

export default () => (
    <NavigationContainer>
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: false }}
        >
            <Stack.Screen name="Main" component={MainScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Root" component={HomeNavigator} />
        </Stack.Navigator>
    </NavigationContainer>
);