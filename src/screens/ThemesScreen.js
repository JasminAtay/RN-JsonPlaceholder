import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '../hook/useTheme';
import Button from '../components/Button';
import { ThemeContext } from '../context/ThemeContext';

export const ThemesScreen = () => {
    const { setTheme } = useContext(ThemeContext);
    return (
        <View style={styles.container}>
            <Text>Themes Screen</Text>
            <Button onPress={() => setTheme('dark')} buttonText={"Change Theme!"}/>
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
      },
});