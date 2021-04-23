import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {IntroScreen, MainScreen} from '../screens';

const Stack = createStackNavigator();

export const MainFlow = () =>{
    return(
        <Stack.Navigator initialRouteName="Intro">
                <Stack.Screen 
                name="Intro" 
                component={IntroScreen} 
                options= {{headerShown: false}}
                />
                <Stack.Screen name="Main" component={MainScreen}/>
            </Stack.Navigator>
    );
};