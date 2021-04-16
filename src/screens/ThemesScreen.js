import React, {useContext} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {useTheme} from '../hook/useTheme';
import {Button, Container} from '../components';

export const ThemesScreen = () => {
    const { theme, setTheme } = useTheme();
    return (
        <Container >
            <Text>Themes Screen</Text>
            <Button 
            onPress={() => setTheme('dark')} 
            buttonText={"Set Dark Theme!"}
            />
            <Button 
            onPress={() => setTheme('light')} 
            buttonText={"Set Light Theme!"}
            />
            <Button 
            onPress={() => setTheme(theme==='dark'?'light':'dark')} 
            buttonText={"Toggle Theme!"}
            />
        </Container>
    );
};
