import React from 'react';
import {connect} from 'react-redux';
import posed, {PoseGroup} from 'react-pose';

import './Layout.css';
import NavigationBar from "../NavigationBar/NavigationBar";
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


const Layout = (props) => {

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
                {props.children}
            </div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Layout);