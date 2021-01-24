import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Linking, ScrollView, TouchableOpacity } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import { CountContext } from '../contexts/count';

export default () => {
    const { setCount } = useContext(CountContext);
    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Resources</Text>
                <ScrollView>
                    <View style={{ flexDirection: 'column', flex: 1}}>
                        <MenuItem onPress={() => {Linking.openURL('https://www.calm.com/breathe'); setCount(prev => (prev + 20));}} image={require('../../assets/1.png')} text='Want to relax for a while? Check out this website' />
                        <MenuItem onPress={() => {Linking.openURL('https://togetherall.com/en-ca/'); setCount(prev => (prev + 20));}} image={require('../../assets/2.png')} text='Want to meet new people virtually? Check this!' />
                        <MenuItem onPress={() => {Linking.openURL('https://kidshelpphone.ca/'); setCount(prev => (prev + 20));}} image={require('../../assets/3.png')} text='Need to talk with someone for a while? Check this out, available anytime!' />
                        <MenuItem onPress={() => {Linking.openURL('https://www.camh.ca/en/health-info/guides-and-publications/community-resource-sheets'); setCount(prev => (prev + 20));}} image={require('../../assets/4.png')} text="Check this out if you'd like to see community resources near you!" />
                        <MenuItem onPress={() => {Linking.openURL('https://sleepyti.me'); setCount(prev => (prev + 20));}} image={require('../../assets/5.png')} text="Try this out! You can manage your sleep schedule using this website!" />
                    </View>
                </ScrollView>
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
        justifyContent: "center",
        padding: 30
    },
    textTitle: {
        color: "#000000a0",
        fontSize: 40,
        fontWeight: "bold",
        textAlign: "center",
        flex: 1,
        paddingBottom: 150
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
    }
});