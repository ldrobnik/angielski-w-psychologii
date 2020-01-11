import React, {useState} from 'react';
import posed from 'react-pose';

import logoImage from '../../../assets/images/logo.svg';

/* POSE */
const AnimatedContent = posed.div({
    visible: {
        opacity: 1,
        filter: 'blur(0px)'
    },
    hidden: {
        opacity: 0,
        filter: 'blur(20px)'
    }
});


const Spinner = () => {

    //specifies spinner visibility
    const [spinnerVisible, setSpinnerVisible] = useState(false);

    //shows spinner
    const showSpinner = () => {
        setSpinnerVisible(true);
    };

    return (
        <React.Fragment>
            <div className="spinnerWrapper">
                <AnimatedContent
                    pose={spinnerVisible ? 'visible' : 'hidden'}>
                    <img
                        src={logoImage}
                        alt='loading spinner'
                        onLoad={showSpinner}
                    />
                </AnimatedContent>
            </div>
            <div className="spinnerBackdrop"></div>
        </React.Fragment>
    );
};

export default Spinner;