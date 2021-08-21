import React from 'react';
import Button from './Button';

const NumBtn = (props) => {

    const callBack = () => {
        props.setDisplay(props.display + props.value)
    };

    return (
        <Button classname={ props.classname }
                callback = { callBack }
                value = { props.value } />
    );
};

export default NumBtn;