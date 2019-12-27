import React, {useState, useEffect} from 'react';
import styled from 'styled-components';
import {Navbar} from 'react-bootstrap';

import {SECTION_NAMES} from '../../data/constants';

const StyledWrapper = styled.div`

`;

const NavBar = (props) => {

    return (
        <StyledWrapper>
            <Navbar>
                {
                    SECTION_NAMES.map((section) => {
                        return (
                            <a key={section.id} href={`#${section.id}`}>
                                {section.name}
                            </a>
                        )
                    })
                }
            </Navbar>
        </StyledWrapper>
    );
};

export default NavBar;