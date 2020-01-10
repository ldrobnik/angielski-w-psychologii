import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './Translations.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Translations = (props) => {

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

export default Translations;