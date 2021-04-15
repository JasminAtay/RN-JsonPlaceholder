import { NavigationContainer } from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack'; 
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import React from 'react';
import {IntroScreen, ListScreen, DetailsScreen, ThemesScreen, CreditsScreen} from './src/screens';


const Stack = createStackNavigator();
const SideMenu = createDrawerNavigator();

const MainFlow = () =>{
    return(
        <Stack.Navigator initialRouteName="Intro">
                <Stack.Screen 
                name="Intro" 
                component={IntroScreen} 
                options= {{headerShown: false}}
                />
                <Stack.Screen name="List" component={ListScreen}/>
                <Stack.Screen name="Details" component={DetailsScreen}/>
            </Stack.Navigator>
    );
};


const App = () => {
    return(
        <NavigationContainer>
            <SideMenu.Navigator initialRouteName="Main" >
                <SideMenu.Screen name="Themes" component={ThemesScreen}/>
                <SideMenu.Screen name="Credits" component={CreditsScreen}/>
                <SideMenu.Screen name="Main" component={MainFlow}/>

            </SideMenu.Navigator>
        </NavigationContainer>
    );
};



export default App;