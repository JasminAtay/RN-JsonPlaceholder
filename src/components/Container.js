import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '../hook/useTheme';


export const Container = ({children, style}) => {
    const {colors} = useTheme();
    return (
        <View style={{
            ...styles.container,
            backgroundColor: colors.base,
            ...style,
        }}>
            {children}
        </View>
    );
};


const styles = StyleSheet.create({
    container:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
})
