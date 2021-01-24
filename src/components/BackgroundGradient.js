import React from 'react';
import { StyleSheet, ImageBackground, View, Text, Dimensions } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window');

export default ({children}) => (
    <LinearGradient
    colors={['rgba(255, 255, 255, 1)', 'rgba(255, 255, 255, 0.1)', 'rgba(250, 155, 87, 0.35)']}
    style={styles.background}
    > 
      <ImageBackground source={require('../../assets/background-colour.png')} style={styles.image}>
        {children}
      </ImageBackground>
    </LinearGradient>
);
const styles = StyleSheet.create({
    background: {
      flex: 1,
    },
    image: {
      flex: 1,
      resizeMode: "contain",
      width: viewportWidth,
      height: 160
  }
});