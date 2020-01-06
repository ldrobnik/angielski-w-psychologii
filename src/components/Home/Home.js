import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';


import NavigationBar from "../NavigationBar/NavigationBar";

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

    return (
        <div id="outer-container">
            <GlobalStyle />
            <NavigationBar />
            <div id="top"></div>
            <div id="page-wrap">
                {
                    SECTION_NAMES.map((section) => {
                        return (
                            <div key={section.id} >
                                <h1 id={section.id}>
                                    {section.name}
                                </h1>
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