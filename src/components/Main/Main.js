import React from 'react';

import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import English from '../English/English';
import Translations from '../Translations/Translations';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES} from "../../data/constants";

const Main = () => {

    return (
        <React.Fragment>
            <div id="top"></div>
            <TopBanner/>
            <About id={SECTION_NAMES[0]}/>
            <English id={SECTION_NAMES[1]}/>
            <Translations id={SECTION_NAMES[2]}/>
            <Offer id={SECTION_NAMES[3]}/>
            <Contact id={SECTION_NAMES[4]}/>
        </React.Fragment>
    );
};

export default Main;