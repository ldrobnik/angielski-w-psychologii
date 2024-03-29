import React, {useState, useEffect} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {Navbar, Nav} from 'react-bootstrap';
import {Link} from 'react-router-dom';
import AnchorLink from 'react-anchor-link-smooth-scroll';

import {setMobile, setPageLoaded} from '../../actions';

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
        handleMobile(); //update the store with mobile status
    };

    // Lets the store know if the page is displayed on a mobile device
    const handleMobile = () => {
        props.setMobile(windowWidth < MOBILE_BREAKPOINT);
    };

    //Sets page status as not loaded
    const handleLoaded = () => {
        props.setPageLoaded(false);
    };

    //Specifies smooth scroll offset depending on the window width
    const scrollOffset = props.mobile ? OFFSET_MOBILE : OFFSET_DESKTOP;

    //specifies the url and text of the router link

    // const routerLink = props.mainPage ?
    //     {
    //         name: WEBSITE_TEXT.navbar.blogLink.name,
    //         url: WEBSITE_TEXT.navbar.blogLink.url
    //     }
    //     :
    //     {
    //         name: WEBSITE_TEXT.navbar.homeLink.name,
    //         url: WEBSITE_TEXT.navbar.homeLink.url
    //     }
    // ;


    useEffect(() => {
        handleMobile(); //update the store with the mobile status

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
            expand="lg"
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
                        SECTION_NAMES.main.map((section) => {
                            let linkClass = '';
                            if (section.id === props.active) {
                                linkClass = 'navLink active'
                            } else {
                                linkClass = 'navLink'
                            }
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
                    {(!props.mainPage && props.loadedPosts > 1) &&
                    (
                        SECTION_NAMES.blog.map((section) => {
                            return (
                                <AnchorLink
                                    key={section.id}
                                    href={`#${section.id}`}
                                    offset={scrollOffset}
                                    onClick={() => setNavExpanded(false)}
                                    className="navLink"
                                >
                                    {section.name}
                                </AnchorLink>

                            )
                        })
                    )
                    }
                    {/*<Link*/}
                    {/*    to={routerLink.url}*/}
                    {/*    className="navLink"*/}
                    {/*    onClick={() => handleLoaded()}*/}
                    {/*>{routerLink.name}</Link>*/}
                    <a
                        href={WEBSITE_TEXT.navbar.facebookLink.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="navLink facebookLink"
                    >
                        {WEBSITE_TEXT.navbar.facebookLink.name}
                    </a>

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
        mainPage: state.mainDisplayed,
        loadedPosts: state.loadedPosts
    };
};

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        setMobile,
        setPageLoaded
    }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(NavigationBar);