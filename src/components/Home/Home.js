import React, {useState, useEffect} from 'react';
import './Home.css';

import NavigationBar from "../NavigationBar/NavigationBar";
import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import EnglishInPsychology from '../EnglishInPsychology/EnglishInPsychology';
import TranslationsInPsychology from '../TranslationsInPsychology/TranslationsInPsychology';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES} from "../../data/constants";

const Home = (props) => {

    //specifies whether the photo is visible (it is turn visible when the photo is loaded
    const [contentVisible, setContentVisible] = useState(false);

    //sets photo visibility to true
    const showContent = () => {
        setContentVisible(true);
    };

    //show content
    useEffect(() => {
            showContent();
        }
    );

    return (
        <div id="outer-container">
            <NavigationBar/>
            <div id="top"></div>
            <div id="page-wrap">
                <TopBanner />
                <About id={SECTION_NAMES[0]} />
                <EnglishInPsychology id={SECTION_NAMES[1]}/>
                <TranslationsInPsychology id={SECTION_NAMES[2]}/>
                <Offer id={SECTION_NAMES[3]}/>
                <Contact id={SECTION_NAMES[4]}/>
            </div>
        </div>
    );
};

export default Home;