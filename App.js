import React from 'react';
import { ThemeContext } from './src/context/ThemeContext';
import {Navigator} from './src/navigation/Navigator';
import {ThemeProvider} from './src/context/ThemeContext';


const App = () => {
    return(
        <ThemeProvider>
            <Navigator/>
        </ThemeProvider>
    );
};
export default App;