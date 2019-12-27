import React, {useState, useEffect} from 'react';
import {createGlobalStyle} from 'styled-components';
import NavigationBar from "../NavigationBar/NavigationBar";

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
        <React.Fragment>
            <GlobalStyle />
            <NavigationBar />
        </React.Fragment>
    );
};

export default Home;