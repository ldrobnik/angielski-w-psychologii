import React, {useState, useEffect} from 'react';
import {Container} from 'react-bootstrap';

import './Home.css';

import NavigationBar from "../NavigationBar/NavigationBar";
import Jumbotron from '../Jumbotron/Jumbotron';
import About from '../About/About';
import EnglishInPsychology from '../EnglishInPsychology/EnglishInPsychology';
import TranslationsInPsychology from '../TranslationsInPsychology/TranslationsInPsychology';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Home = (props) => {

    return (
        <div id="outer-container">
            <NavigationBar />
            <div id="top"></div>
            <div id="page-wrap">
                <Container>
                    <Jumbotron />
                    <About id={SECTION_NAMES[0]} />
                    <EnglishInPsychology id={SECTION_NAMES[1]} />
                    <TranslationsInPsychology id={SECTION_NAMES[2]} />
                    <Offer id={SECTION_NAMES[3]} />
                    <Contact id={SECTION_NAMES[4]} />
                </Container>

            </div>
        </div>
    );
};

export default Home;