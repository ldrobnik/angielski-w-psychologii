import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {SECTION_NAMES, OFFSET} from '../../data/constants';

import logo from '../../assets/images/logo.svg';

const NavigationBar = (props) => {

    const StyledNavLink = styled(AnchorLink)`
      color: ${props => props.theme.themeColor} !important;
      text-decoration: none;
         
`;

    return (

        <Navbar bg="light" variant="light" sticky="top">
            <Navbar.Brand>
                <AnchorLink href="#top"
                            offset={OFFSET}>
                <img
                    src={logo}
                    alt="Logo"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                />
                </AnchorLink>
            </Navbar.Brand>
            <Nav className="mr-auto">
                {
                    SECTION_NAMES.map((section) => {
                        return (
                            <Nav.Link key={section.id}>

                                <StyledNavLink href={`#${section.id}`}
                                            offset={OFFSET}>
                                    {section.name}
                                </StyledNavLink>

                            </Nav.Link>

                        )
                    })
                }
            </Nav>
        </Navbar>

    );
};

export default NavigationBar;