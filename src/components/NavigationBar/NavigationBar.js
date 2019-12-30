import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';

import {SECTION_NAMES} from '../../data/constants';

import logo from '../../assets/images/logo.svg';

const NavigationBar = (props) => {

    const StyledNavLink = styled(Nav.Link)`
      color: ${props => props.theme.themeColor} !important;
      &&&.active {
         color: ${props => props.theme.darkColor} !important;
      }    
`;

    return (

        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand href="#">
                <img
                    src={logo}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
            </Navbar.Brand>
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