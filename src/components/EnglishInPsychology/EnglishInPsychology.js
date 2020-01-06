import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import './EnglishInPsychology.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const EnglishInPsychology = (props) => {

    return (
        <Row>
            <h1 id={SECTION_NAMES[1].id}>
                {SECTION_NAMES[1].name}
            </h1>
            {FILLER}
        </Row>
    );
};

export default EnglishInPsychology;