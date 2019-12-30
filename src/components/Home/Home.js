import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import NavigationBar from "../NavigationBar/NavigationBar";
import SideMenu from "../SideMenu/SideMenu";

import {SECTION_NAMES, FILLER} from "../../data/constants";

/* STYLED COMPONENTS */
const GlobalStyle = createGlobalStyle`
    body {
        font-family: ${props => props.theme.serif};
        color: ${props => props.theme.darkColor};
        background: linear-gradient(${props => props.theme.themeColor}, ${props => props.theme.darkThemeColor});
        min-height: 100vh;
        }
        
    a {
        text-decoration: none;
        color: ${props => props.theme.darkColor};

    }
     
     ::selection {
        color: ${props => props.theme.lightColor};
        background-color: ${props => props.theme.themeColor};
     }
`;

const Home = (props) => {

    //window width at which side menu is changed to top menu
    const mobileBreakpoint = 700;

    // Specifies the current window width
    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    // Updates the window width
    const handleWindowSizeChange = () => {
        setWindowWidth(window.innerWidth);
    };

    // Specifies whether the app is displayed on a mobile device
    const isMobile = windowWidth <= mobileBreakpoint;

    // Adds an event listener to monitor the screen width and remove the listener when the component unmounts
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);

        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    });

    //display top menu on larger screens and side menu on small screens
    const menu = isMobile ? <SideMenu /> : <NavigationBar />;

    return (
        <div id="outer-container">
            <GlobalStyle />
            {menu}
            <div id="top"></div>
            <div id="page-wrap">
                {
                    SECTION_NAMES.map((section) => {
                        return (
                            <div key={section.id} >
                                <h1 id={section.id}>{section.name}</h1>
                                {FILLER}
                            </div>

                        )
                    })
                }
            </div>
        </div>
    );
};

export default Home;