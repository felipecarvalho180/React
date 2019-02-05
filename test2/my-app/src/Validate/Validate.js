import React from 'react';

const validate = (props) => {
    let validateMessage = 'Text too large!'

    if (props.inputLength <= 5) {
        validateMessage = 'Text too short!'
    }

    return(
        <div>
            <p>{validateMessage}</p>
        </div>
    )
};

export default validate