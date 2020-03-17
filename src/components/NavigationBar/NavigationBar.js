import React, {useState, useEffect} from 'react';
import {bindActionCreators} from "redux";
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import {connect} from 'react-redux';

import {setMobile} from "../../actions";

import './NavigatorBar.css';

import {SECTION_NAMES, OFFSET_DESKTOP, OFFSET_MOBILE, MOBILE_BREAKPOINT, WEBSITE_TEXT} from '../../data/constants';

import logo from '../../assets/images/logo.svg';

const NavigationBar = (props) => {

    // Specifies whether the nav is expanded
    const [navExpanded, setNavExpanded] = useState(false);

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth); //update the window width state with the current window width
        setMobile(); //update the store with mobile status
    };

    // Lets the store know if the page is displayed on a mobile device
    const setMobile = () => {
        props.setMobile(windowWidth < MOBILE_BREAKPOINT);
    };

    //Specifies smooth scroll offset depending on the window width
    const scrollOffset = props.mobile ? OFFSET_MOBILE : OFFSET_DESKTOP;


    useEffect(() => {
        setMobile(); //update the store with the mobile status

        window.addEventListener('resize', handleWindowSizeChange); // Add an event listener to monitor the screen width

        return () => {

            window.removeEventListener('resize', handleWindowSizeChange); //remove the listener when the component unmounts
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
            <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
            <Navbar.Collapse>
                <Nav className="mr-auto">
                    {props.mainPage &&
                        (
                            SECTION_NAMES.map((section) => {
                                let linkClass = '';
                                if (section.id === props.active) {
                                    linkClass = 'navLink active'
                                } else {
                                    linkClass = 'navLink'
                                }
                                console.log(section, props.active, linkClass);
                                return (
                                    <AnchorLink
                                        key={section.id}
                                        href={`#${section.id}`}
                                        offset={scrollOffset}
                                        onClick={() => setNavExpanded(false)}
                                        className={linkClass}
                                    >
                                        {section.name}
                                    </AnchorLink>

                                )
                            })
                        )
                    }
                    {props.mainPage &&
                    <Link
                        to={WEBSITE_TEXT.blogLink.url}
                        className="navLink"
                    >{WEBSITE_TEXT.blogLink.name}</Link>
                    }
                    {!props.mainPage &&
                    <Link
                        to={WEBSITE_TEXT.homeLink.url}
                        className="navLink"
                    >{WEBSITE_TEXT.homeLink.name}</Link>
                    }


                        </Nav>
                    }
            </Navbar.Collapse>
        </Navbar>
    );
};

const mapStateToProps = state => {
    return {
        mobile: state.isMobile,
        loaded: state.pageLoaded,
        active: state.activeSection,
        mainPage: state.mainDisplayed
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({setMobile}, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);