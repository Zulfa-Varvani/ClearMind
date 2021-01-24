import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/Home';
import MusicScreen from '../screens/Music';
import ResourcesScreen from '../screens/Resources';
import ChatScreen from '../screens/Chat';
import DataScreen from '../screens/Data';
import QuestionScreen from '../screens/Question';

const Stack = createStackNavigator();

export default () => (
    <Stack.Navigator
        screenOptions={{ headerShown: false }}
    >
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Music" component={MusicScreen} />
        <Stack.Screen name="Resources" component={ResourcesScreen} />
        <Stack.Screen name="Chat" component={ChatScreen} />
        <Stack.Screen name="Data" component={DataScreen} />
        <Stack.Screen name="Question" component={QuestionScreen} />
    </Stack.Navigator>
);