import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themes } from '../styles/themes'

const Button = ({onPress, buttonText}) => {
    return (
        <TouchableOpacity style={styles.costumButton} onPress={onPress}>
            <Text style={styles.textStyle}>{buttonText} </Text>
        </TouchableOpacity>
    )
}

export default Button

const styles = StyleSheet.create({
    costumButton:{
        height: 50,
        width:300,
        borderRadius: 25,
        borderStyle: 'solid',
        borderWidth:2,
        alignSelf:'center',
        justifyContent: 'center',
        margin:5,
        backgroundColor: themes.light.colors.alt,
        borderColor: themes.light.colors.primary,
    },
    textStyle:{
        fontSize:17,
        letterSpacing:0.6,
        textAlign: 'center',
        lineHeight: 22,
        color: themes.light.colors.buttonText,
    },
});
