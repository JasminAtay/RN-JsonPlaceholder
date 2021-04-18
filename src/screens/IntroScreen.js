import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {Button, Container} from '../components';

export const IntroScreen = ({navigation}) => {
    console.log(`this is intro: `);
    return (
        <Container>
            <Text style={styles.title}>Intro Screen</Text>
            <Button 
            style={{backgroundColor:'green', borderColor: 'green'}}
            onPress={() => navigation.navigate('List') } 
            buttonText={"Let's Begin!"} 
            />
        </Container>
    )
}



const styles = StyleSheet.create({
      title:{
        fontSize:34,
        lineHeight:45,
        letterSpacing:0.36,
      },
});
