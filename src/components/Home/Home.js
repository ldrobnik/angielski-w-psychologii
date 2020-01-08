import React, {useState, useEffect} from 'react';
import posed from 'react-pose';
import './Home.css';

import NavigationBar from "../NavigationBar/NavigationBar";
import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import EnglishInPsychology from '../EnglishInPsychology/EnglishInPsychology';
import TranslationsInPsychology from '../TranslationsInPsychology/TranslationsInPsychology';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES} from "../../data/constants";

/* POSE */
const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0)',
        transition: {
            ease: 'easeIn',
            duration: 500 }
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});

const Home = (props) => {

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