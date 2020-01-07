import React, {useState, useEffect} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './TopBanner.css';

import '../UI/AnchorButton/AnchorButton';

import {WEBSITE_TEXT} from "../../data/constants";
import AnchorButton from "../UI/AnchorButton/AnchorButton";

const TopBanner = (props) => {

    return (
        <Jumbotron fluid>
            <h1 className="title">{WEBSITE_TEXT.topBanner.title}</h1>
            <div className="subtitle">{WEBSITE_TEXT.topBanner.subtitle}</div>
            <AnchorButton
                target="oferta"
                message={WEBSITE_TEXT.topBanner.button}
            />
        </Jumbotron>
    );
};

export default TopBanner;