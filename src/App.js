import React from 'react';
import ReactGA from 'react-ga';

import Home from './components/Home/Home';

//Google Analytics code
const ANALYTICS_KEY = process.env.REACT_APP_ANALYTICS_KEY; // Google analytics API key
ReactGA.initialize(ANALYTICS_KEY);
ReactGA.pageview(window.location.pathname + window.location.search);

const App = () => {

    return (
        <Home/>
    );
}

export default App;
