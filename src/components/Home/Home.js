import React from 'react';
import './Home.css';

import NavigationBar from "../NavigationBar/NavigationBar";
import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import English from '../English/English';
import Translations from '../Translations/Translations';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES} from "../../data/constants";

const Home = (props) => {

    return (
        <div id="outer-container">
            <NavigationBar/>
            <div id="top"></div>
            <div id="page-wrap">
                <TopBanner />
                <About id={SECTION_NAMES[0]} />
                <English id={SECTION_NAMES[1]}/>
                <Translations id={SECTION_NAMES[2]}/>
                <Offer id={SECTION_NAMES[3]}/>
                <Contact id={SECTION_NAMES[4]}/>
            </div>
        </div>
    );
};

export default Home;