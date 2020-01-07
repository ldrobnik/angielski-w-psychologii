import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './About.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const About = (props) => {

    return (
        <div className="lightBackground sectionContent">
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[0].id}>
                        {SECTION_NAMES[0].name}
                    </h1>
                    {FILLER}
                </Row>
            </Container>
        </div>
    );
};

export default About;