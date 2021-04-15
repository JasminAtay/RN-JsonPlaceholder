import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { themes } from '../styles/themes';
import {useTheme} from '../hook/useTheme';

const Button = ({onPress, buttonText, style}) => {
    const {colors} = useTheme();
    return (
        <TouchableOpacity 
        style={{
            ...styles.costumButton,
            backgroundColor: colors.alt,
            borderColor: colors.primary,
            ...style,
        }} 
        onPress={onPress}
        >
            <Text style={{
                ...styles.textStyle,
                color: colors.buttonText,
            }}>
                {buttonText} 
            </Text>
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
        
    },
    textStyle:{
        fontSize:17,
        letterSpacing:0.6,
        textAlign: 'center',
        lineHeight: 22,
        
    },
});
