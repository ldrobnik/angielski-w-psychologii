import React, {useState, useEffect} from 'react';
import styled, {createGlobalStyle} from 'styled-components';

import './Home.css';

import NavigationBar from "../NavigationBar/NavigationBar";

import {SECTION_NAMES, FILLER} from "../../data/constants";

const Home = (props) => {

    return (
        <div id="outer-container">
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