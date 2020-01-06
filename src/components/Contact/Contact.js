import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import './Contact.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Contact = (props) => {

    return (
        <Row>
            <h1 id={SECTION_NAMES[4].id}>
                {SECTION_NAMES[4].name}
            </h1>
            {FILLER}
        </Row>
    );
};

export default Contact;