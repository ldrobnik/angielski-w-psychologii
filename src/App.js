import React from 'react';
import {ThemeProvider} from 'styled-components';
import ReactGA from 'react-ga';

//Google Analytics code
const ANALYTICS_KEY = process.env.REACT_APP_ANALYTICS_KEY; // Google analytics API key
ReactGA.initialize(ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {

    // Theme to be used in the project, two primary colors depending on redux state
    const theme = {
        //colours
        themeColor: '#9D0059',
        darkThemeColor: '#682049',
        darkColor: '#0f0f0f',
        lightColor: '#bbbbbb',

        //fonts
        cursive: `'Fugaz One', cursive`,
        serif: `'Roboto Slab', serif`,

        //font sizes
        titleSize: '5em',
        subtitleSize: '2em',
        bodySize: '1.3em',
        captionSize: '1em',
        smallCaptionSize: '0.8em',

        //breakpoints
        extraSmallScr: '480px',
        smallScr: '736px',
        mediumScr: '980px',
        largeScr: '1280px',
        extraLargeScr: '1690px',

        //opacity
        slightlyTranslucent: '0.7',
        translucent: '0.5',
        transparent: '0.1'
    };
    return (
        <ThemeProvider theme={theme}>
            App
        </ThemeProvider>
    );
}

export default App;
