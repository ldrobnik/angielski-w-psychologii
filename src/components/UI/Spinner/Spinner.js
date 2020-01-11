import React from 'react';
import posed from 'react-pose';
import {connect} from 'react-redux';

import logoImage from '../../../assets/images/logo.svg';

/* POSE */
const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});


const Spinner = (props) => {

    //specifies whether the spinner is visible based on whether the page has loaded
    const spinnerVisible = !props.loaded;

    return (

        <AnimatedContent
            pose={spinnerVisible ? 'visible' : 'hidden'}>
            <div className="spinnerWrapper">

                <img
                    src={logoImage}
                    alt='loading spinner'
                />

            </div>
            <div className="spinnerBackdrop"></div>
        </AnimatedContent>

    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    };
};

export default connect(mapStateToProps)(Spinner);