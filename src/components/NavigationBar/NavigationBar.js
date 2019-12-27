import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Navbar, Nav} from 'react-bootstrap';

import {SECTION_NAMES} from '../../data/constants';

const NavigationBar = (props) => {

    return (

            <Navbar bg="light" variant="light">
                <Nav className="mr-auto">
                    {
                        SECTION_NAMES.map((section) => {
                            return (
                                <Nav.Link key={section.id} href={`#${section.id}`}>
                                    {section.name}
                                </Nav.Link>
                            )
                        })
                    }
                </Nav>
            </Navbar>

    );
};

export default NavigationBar;