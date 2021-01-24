import React, { useContext } from 'react';
import { View, StyleSheet, Text, Image, ImageBackground, ScrollView} from 'react-native';
import BackgroundGradient from '../components/BackgroundGradient';
import AppButton from '../components/AppButton';
import { CountContext } from '../contexts/count';

export default ({navigation}) => {
    const { count } = useContext(CountContext);
    const { setCount } = useContext(CountContext);
    
    const handleButtonClick = () => {
        navigation.navigate('Root');
        setCount(prev => (0));
    };

    return (
        <BackgroundGradient>
            <View style={styles.container}>
                <Text style={styles.textTitle}>My Data</Text>
                <ScrollView>
                    <View style={{ flexDirection: 'row', flex: 1, maxHeight: 100 }}>
                        <ImageBackground source={require('../../assets/circle.png')} style={styles.image}/>
                        <Text style={{
                            fontWeight: 'bold',
                            position: 'absolute',
                            textAlign: "center",
                            fontSize: 30,
                            bottom: 40,
                            left: 20
                        }}>{count}</Text>
                        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                            <Text style={[styles.textDescrp, { width: 200 }]}>
                                You currently have {count} points. Want to redeem?
                            </Text>
                            <AppButton onPress={handleButtonClick} title="Redeem" fontSize={15} backgroundColor="#007bff" />
                        </View>
                    </View>
                    <View style={styles.textView}>
                        <Text style={styles.textSubTitle}>Monthly Logs</Text>
                        <View style={{borderBottomColor: 'black', borderBottomWidth: 1,}} />
                    </View>
                    <View style={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={styles.text}>Here is your monthly data</Text>
                        <Image source={require('../../assets/graph.png')} style={styles.dataImage}/>
                        <Image source={require('../../assets/data.png')} style={styles.dataImage}/>
                    </View>
                    <View styles={{justifyContent: 'center', alignItems: 'center'}}>
                        <Text style={[styles.text, {paddingBottom: 20}]}>Fill out your monthly questionnaire!</Text>
                        <AppButton onPress={() => navigation.navigate('Question')} title="Questionnaire" fontSize={20} backgroundColor="#007bff" />
                    </View>
                </ScrollView>
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
        textAlign: "center",
        marginBottom: 70
    },
    image: {
        width: 75,
        height: 70,
        marginRight: 30,
        position: 'relative'
    },
    dataImage: {
        width: 300,
        height: 200,
        resizeMode: 'contain'
    },
    textView: {
        borderBottomWidth: 2,
        borderBottomColor: 'black',
        marginTop: 10,
        marginBottom: 20
    },
    text: {
        color: "#000000a0",
        fontSize: 16,
        textAlign: "center",
    },
    textDescrp: {
        color: "#000000a0",
        fontSize: 15,
        textAlign: "center",
        paddingBottom: 15
    }
});