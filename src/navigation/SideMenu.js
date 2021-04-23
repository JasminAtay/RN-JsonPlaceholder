import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer'; 
import {ThemesScreen, CreditsScreen, SearchScreen} from '../screens';
import {MainFlow} from './MainFlow'


const Drawer = createDrawerNavigator();

export const SideMenu = () => {
    return(
        <Drawer.Navigator initialRouteName="MainFlow" >
                <Drawer.Screen name="MainFlow" component={MainFlow}/>
                <Drawer.Screen name="Themes" component={ThemesScreen}/>
                <Drawer.Screen name="Credits" component={CreditsScreen}/>
                <Drawer.Screen name="Search" component={SearchScreen}/>
            </Drawer.Navigator>
       
    );
};



