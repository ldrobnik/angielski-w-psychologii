import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import styled from 'styled-components';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {SECTION_NAMES, OFFSET} from '../../data/constants';

import logo from '../../assets/images/logo.svg';

/* STYLED COMPONENTS */
const StyledNavLink = styled(AnchorLink)`
      color: ${props => props.theme.themeColor} !important;
      text-decoration: none;
      padding: 10px;
         
`;

const NavigationBar = (props) => {

    // Specifies whether the nav is expanded
    const [navExpanded, setNavExpanded] = useState(false);



    return (

        <Navbar
            collapseOnSelect
            onToggle={() => setNavExpanded(!navExpanded)}
            expanded={navExpanded}
            expand="lg"
            bg="light"
            variant="light"
            sticky="top"
            >
            <Navbar.Brand>
                <AnchorLink href="#top"
                            offset={OFFSET}
                            onClick={() => setNavExpanded(false)}
                >
                    <img
                        src={logo}
                        alt="Logo"
                        width="30"
                        height="30"
                        className="d-inline-block align-top"
                    />
                </AnchorLink>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {
                        SECTION_NAMES.map((section) => {
                            return (
                                <StyledNavLink
                                    key={section.id}
                                    href={`#${section.id}`}
                                    offset={OFFSET}
                                    onClick={() => setNavExpanded(false)}
                                >

                                        {section.name}


                                </StyledNavLink>

                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavigationBar;