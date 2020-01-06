import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import './Offer.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Offer = (props) => {

    return (
        <Row>
            <h1 id={SECTION_NAMES[3].id}>
                {SECTION_NAMES[3].name}
            </h1>
            {FILLER}
        </Row>
    );
};

export default Offer;