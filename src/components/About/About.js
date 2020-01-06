import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import './About.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const About = (props) => {

    return (
        <Row>
            <h1 id={SECTION_NAMES[0].id}>
                {SECTION_NAMES[0].name}
            </h1>
            {FILLER}
        </Row>
    );
};

export default About;