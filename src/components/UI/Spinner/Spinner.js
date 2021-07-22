import React from 'react';
import {connect} from 'react-redux';

import logoImage from '../../../assets/images/logo.svg';
import './Spinner.css';


const Spinner = () => {


    return (
        <div className="outerWrapper">
            <div className="spinnerWrapper">

                <img
                    src={logoImage}
                    alt="loading…"
                    height="110px"
                    width="110px"
                />

            </div>
            <div className="spinnerBackdrop"></div>
        </div>
    );
};

const mapStateToProps = state => {
    return {
        loaded: state.pageLoaded
    }
};

export default connect(mapStateToProps)(Spinner);