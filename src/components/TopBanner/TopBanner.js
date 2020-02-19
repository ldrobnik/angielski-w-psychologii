import React from 'react';
import {bindActionCreators} from "redux";
import {Jumbotron} from 'react-bootstrap';
import {connect} from 'react-redux';
import './TopBanner.css';

import '../UI/AnchorButton/AnchorButton';

import {WEBSITE_TEXT} from "../../data/constants";
import AnchorButton from "../UI/AnchorButton/AnchorButton";
import backdrop from '../../assets/images/backdrop.jpg';
import {setPageLoaded} from "../../actions";

const TopBanner = (props) => {

    //Changes the page loaded state in Redux store
    const handleLoaded = () => {
        props.setPageLoaded(true);
    };

    return (
        <Jumbotron
            className="verticallyCentered"
            fluid>
            <div className="bannerContent">
                <h1 className="title">{WEBSITE_TEXT.topBanner.title}</h1>
                <div className="subtitle">{WEBSITE_TEXT.topBanner.subtitle}</div>
                <AnchorButton
                    target="oferta"
                    message={WEBSITE_TEXT.topBanner.button}
                />
            </div>
            <img
                className="hiddenBackdrop"
                src={backdrop}
                alt={WEBSITE_TEXT.topBanner.backdropAltText}
                onLoad={() => setTimeout(handleLoaded, 1000)}
            />
        </Jumbotron>
    );
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setPageLoaded}, dispatch);
};

export default connect(null, mapDispatchToProps)(TopBanner);