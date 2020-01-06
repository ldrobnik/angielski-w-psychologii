import React, {useState, useEffect} from 'react';
import {Row, Container} from 'react-bootstrap';
import './Contact.css';

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Contact = (props) => {

    return (
        <div className='lightBackground'>
            <Container>
                <Row>
                    <h1 id={SECTION_NAMES[4].id}>
                        {SECTION_NAMES[4].name}
                    </h1>
                    {FILLER}
                </Row>
            </Container>
        </div>
    );
};

export default Contact;