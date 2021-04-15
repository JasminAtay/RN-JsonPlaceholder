import React, { createContext, useState } from 'react';
import {Appearance} from 'react-native'
import { themes } from '../styles/themes';

const deviceMode = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';
console.log(`colorScheme: `, colorScheme);

export const ThemeContext = createContext({
    colors: themes[deviceMode].colors,
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(deviceMode);
    console.log(`theme: `, theme);
    return(
        <ThemeContext.Provider value = {{colors: themes[theme].colors, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}