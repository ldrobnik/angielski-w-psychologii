import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import NavBar from "../NavBar/NavBar";

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
        color: ${props => props.theme.themeColor};
        background-color: ${props => props.theme.darkColor};
     }
`;

const Home = (props) => {

    return (
        <React.Fragment>
            <GlobalStyle />
            <NavBar />
        </React.Fragment>
    );
};

export default Home;