import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import './Home.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import English from '../English/English';
import Translations from '../Translations/Translations';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';
import Spinner from '../UI/Spinner/Spinner';

import {SECTION_NAMES} from "../../data/constants";


/* POSE */
const AnimatedOverlay = posed.div({
    enter: {
        opacity: 1
    },
    exit: {
        opacity: 0,
        transition: {
            ease: 'easeOut',
            duration: 800
        }
    }
});


const Home = (props) => {

    //class applied to outer container to prevent scrolling before the page is loaded
    const containerClass = (props.loaded) ? "" : "constrained";

    //display the navbar only after the page is loaded
    const navBar = (props.loaded) ? <NavigationBar /> : null;

    //display spinner only when the page is not loaded
    let spinner = (!props.loaded) ? <Spinner /> : null;

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {spinner}
                <PoseGroup>
                    {!props.loaded && [
                        <AnimatedOverlay key="overlay" className="overlay" />
                    ]}
                </PoseGroup>
                {navBar}
                <div id="top"></div>
                <TopBanner />
                <About id={SECTION_NAMES[0]} />
                <English id={SECTION_NAMES[1]} />
                <Translations id={SECTION_NAMES[2]} />
                <Offer id={SECTION_NAMES[3]} />
                <Contact id={SECTION_NAMES[4]} />
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Home);