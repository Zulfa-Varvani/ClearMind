import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, Linking } from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import AppButton from '../components/AppButton';
import { CountContext } from '../contexts/count';

export default ({ navigation }) => {
    const { setCount } = useContext(CountContext);

    const handleButtonClick = () => {
        Linking.openURL('https://www.faircounseling.com/about-fair-counseling/counseling-staff-our-team-of-psychologists-and-therapists/');
    };

    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>Welcome!</Text>
                <View style={{ flexDirection: 'row', flex: 1, marginTop: 80, maxHeight: 180 }}>
                    <Image source={require('../../assets/professional.jpg')} style={styles.image}/>
                    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                        <Text style={[styles.textDescrp, { width: 200 }]}>
                            Meet Linda! This is your paired health care professional, whom you can contact anytime. We’ll be sending them your responses so they can help you when you need it!
                        </Text>
                        <AppButton onPress={handleButtonClick} title="Learn More!" fontSize={15} backgroundColor="#007bff" />
                    </View>
                </View>
                <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
                    <Text style={styles.textDescrp}>
                    Now that you’re good to go, check out the menu page to see all the activities you can do!
                    </Text>
                    <AppButton onPress={() => {navigation.navigate('Root'); setCount(prev => (prev + 10));}} title="Home Screen" fontSize={15} backgroundColor="#007bff" />
                </View>
            </View>
        </BackgroundGradient>
    );
}

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
        textAlign: "center"
    },
    image: {
        width: 100,
        height: 150,
        marginRight: 30
    },
    textDescrp: {
        color: "#000000a0",
        fontSize: 15,
        textAlign: "center",
    }
});
