import React, {useState, useEffect} from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import './NavigatorBar.css';

import {SECTION_NAMES, OFFSET_DESKTOP, OFFSET_MOBILE, MOBILE_BREAKPOINT} from '../../data/constants';

import logo from '../../assets/images/logo.svg';

const NavigationBar = (props) => {

    // Specifies whether the nav is expanded
    const [navExpanded, setNavExpanded] = useState(false);

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Specifies whether the app is displayed on a mobile device
    const isMobile = windowWidth < MOBILE_BREAKPOINT;

    //Specifies smooth scroll offset depending on the window width
    const scrollOffset = isMobile ? OFFSET_MOBILE : OFFSET_DESKTOP;


    // Adds an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    return (

        <Navbar
            collapseOnSelect
            onToggle={() => setNavExpanded(!navExpanded)}
            expanded={navExpanded}
            expand="md"
            bg="light"
            variant="light"
            sticky="top"
            >
            <Navbar.Brand>
                <AnchorLink href="#top"
                            offset={scrollOffset}
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
                                <AnchorLink
                                    key={section.id}
                                    href={`#${section.id}`}
                                    offset={scrollOffset}
                                    onClick={() => setNavExpanded(false)}
                                    className='navLink'
                                >

                                        {section.name}


                                </AnchorLink>

                            )
                        })
                    }
                </Nav>
            </Navbar.Collapse>
        </Navbar>

    );
};

export default NavigationBar;