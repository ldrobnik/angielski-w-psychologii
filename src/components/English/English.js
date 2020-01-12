import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import posed from 'react-pose';
import './English.css';
import TextBubble from '../UI/TextBubble/TextBubble';

import {SECTION_NAMES, FILLER} from "../../data/constants";

/* POSE */
const AnimatedList = posed.div({
    visible: {
        delayChildren: 100,
        staggerChildren: 350
    }
});

const AnimatedMessage = posed.div({
    visible: {
        x: '0%',
        transition: {
            type: 'spring',
            stiffness: 100
        }
    },
    hidden: {
        x: '300%'
    }
});

const English = (props) => {

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
                    <TextBubble type="light">{FILLER}</TextBubble>

                </Row>
            </Container>
        </div>
    );
};

export default English;