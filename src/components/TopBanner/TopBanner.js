import React, {useState, useEffect} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './TopBanner.css';

import '../UI/AnchorButton/AnchorButton';

import {WEBSITE_TEXT} from "../../data/constants";
import AnchorButton from "../UI/AnchorButton/AnchorButton";
import backdrop from '../../assets/images/backdrop.jpg';

const TopBanner = (props) => {

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
                onLoad={alert('loaded')}
            />
        </Jumbotron>
    );
};

export default TopBanner;