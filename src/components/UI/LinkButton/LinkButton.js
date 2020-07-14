import React from 'react';

import './LinkButton.css';

const LinkButton = (props) => {

    return (
        <a
            href={props.url}
            className="linkButton"
            target="_blank"
            rel="noopener noreferrer"
        >
            {props.message}
        </a>
    );
};

export default LinkButton;