import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import './TranslationsInPsychology.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const TranslationsInPsychology = (props) => {

    return (
        <Row>
            <h1 id={SECTION_NAMES[2].id}>
                {SECTION_NAMES[2].name}
            </h1>
            {FILLER}
        </Row>
    );
};

export default TranslationsInPsychology;