import React, {useState, useEffect} from 'react';

import './TextBubble.css';


const TextBubble = (props) => {

    return (
        <div className="textBubble">
            {props.message}
        </div>
    );
};

export default TextBubble;