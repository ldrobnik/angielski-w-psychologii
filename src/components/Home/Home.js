import React from 'react';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import './Home.css';
import NavigationBar from "../NavigationBar/NavigationBar";
import Layout from '../Layout/Layout';
import Main from '../Main/Main';
import Spinner from '../UI/Spinner/Spinner';

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
        <Layout>
            <Main/>
        </Layout>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Home);