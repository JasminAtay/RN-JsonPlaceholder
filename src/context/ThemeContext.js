import React, { createContext, useState } from 'react';
import {Appearance} from 'react-native'
import { themes } from '../styles/themes';

const deviceMode = Appearance.getColorScheme() === 'dark' ? 'dark' : 'light';

export const ThemeContext = createContext({
    colors: themes[deviceMode].colors,
});

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState(deviceMode);
    return(
        <ThemeContext.Provider value = {{colors: themes[theme].colors, setTheme, theme:theme}}>
            {children}
        </ThemeContext.Provider>
    )
}