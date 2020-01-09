import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './TranslationsInPsychology.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";
import Contact from "../Contact/Contact";

const TranslationsInPsychology = (props) => {

    return (
        <div className="lightBackground sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[2].id}>
                        {SECTION_NAMES[2].name}
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

export default TranslationsInPsychology;