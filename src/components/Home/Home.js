import React from 'react';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import './Home.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import Main from '../Main/Main';
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

    return (
        <div className="contentWrapper">
            <div className={containerClass}>
                {!props.loaded && <Spinner/>}
                <PoseGroup>
                    {!props.loaded && [
                        <AnimatedOverlay key="overlay" className="overlay" />
                    ]}
                </PoseGroup>
                {props.loaded && <NavigationBar/>}
                <Main />
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