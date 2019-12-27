import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';

import {SECTION_NAMES} from '../../data/constants';

const NavigationBar = (props) => {

    const StyledNavLink = styled(Nav.Link)`

      &&&.active {
        color: ${props => props.theme.themeColor} !important;
      
      }    
`;

    return (

        <Navbar bg="light" variant="light">
            <Nav className="mr-auto">
                {
                    SECTION_NAMES.map((section) => {
                        return (
                            <StyledNavLink key={section.id} href={`#${section.id}`}>

                                {section.name}

                            </StyledNavLink>

                        )
                    })
                }
            </Nav>
        </Navbar>

    );
};

export default NavigationBar;