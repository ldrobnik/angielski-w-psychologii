import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";

import TopBanner from '../TopBanner/TopBanner';
import About from '../About/About';
import English from '../English/English';
import Translations from '../Translations/Translations';
import Offer from '../Offer/Offer';
import Contact from '../Contact/Contact';

import {SECTION_NAMES} from "../../data/constants";

const Main = props => {

    //sets Main page as displayed
    const setMainDisplayed = () => {
        props.setMainPage(true);
    };

    useEffect(() => {
        setMainDisplayed(); //set the main page as displayed
    }, []);

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

const mapStateToProps = state => {
    return {
        mainPage: state.mainDisplayed
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setMainPage
    }, dispatch);
};

export default Main;