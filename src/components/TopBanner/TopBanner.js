import React, {useState, useEffect} from 'react';
import {Jumbotron} from 'react-bootstrap';
import './TopBanner.css';

import {WEBSITE_TEXT} from "../../data/constants";

const TopBanner = (props) => {

    return (
        <Jumbotron fluid>
            <h1 className="title">{WEBSITE_TEXT.topBanner.title}</h1>
        </Jumbotron>
    );
};

export default TopBanner;