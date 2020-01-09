import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './EnglishInPsychology.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const EnglishInPsychology = (props) => {

    return (
        <div className="sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[1].id}>
                        {SECTION_NAMES[1].name}
                    </h1>
                </Row>
                <Row className="separator"></Row>
                <Row>
                    {FILLER}
                </Row>
            </Container>
        </div>
    );
};

export default EnglishInPsychology;