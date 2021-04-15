import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Button from '../components/Button';

export const IntroScreen = ({navigation}) => {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Intro Screen</Text>
            <Button 
            onPress={() => navigation.navigate('List') } 
            buttonText={"Let's Begin!"} 
            />
        </View>
    )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
      title:{
        fontSize:34,
        lineHeight:45,
        letterSpacing:0.36,
      },
});
