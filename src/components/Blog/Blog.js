import React, {useEffect} from 'react';
import {connect} from 'react-redux'
import {bindActionCreators} from "redux";
import {setMainPage} from "../../actions";

import TopBanner from '../TopBanner/TopBanner';
import Posts from './Posts/Posts';
import CopyrightNote from '../UI/CopyrightNote/CopyrightNote';

const Blog = props => {

    //sets Main page as NOT displayed
    const setMainNotDisplayed = () => {
        props.setMainPage(false);
    };

    useEffect(() => {
        setMainNotDisplayed(); //set the main page as NOT displayed
    }, []);

    return (
        <React.Fragment>
            <div id="top"></div>
            <TopBanner/>
            <Posts />
            <CopyrightNote />
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

export default connect(mapStateToProps, mapDispatchToProps)(Blog);