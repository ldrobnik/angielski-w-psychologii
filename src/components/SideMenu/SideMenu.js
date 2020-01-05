import React, {useState, useEffect} from 'react';
import {elastic as Menu} from 'react-burger-menu'
import './SideMenu.css';

import {SECTION_NAMES} from '../../data/constants';


const SideMenu = (props) => {

    return (

        <Menu
            pageWrapId={ "page-wrap" }
            outerContainerId={ "outer-container" }
        >
            {
                SECTION_NAMES.map((section) => {
                    return (
                        <a
                            key={section.id}
                            id={section.id}
                            className="menu-item"
                            href={`#${section.id}`}>
                            {section.name}
                        </a>

                    )
                })
            }
        </Menu>

    );
};

export default SideMenu;