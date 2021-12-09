import React from 'react';
import Button from './Button';

const NumBtn = (props) => {

    const callBack = () => {

        // store the current input that is displayed
        let display = props.display;

        // previous element is a string (operation)
        if (typeof(props.history.at(-1)) === "string") {
            // clear the display so that the new operand is displayed
            display = "";
        }

        // adds the value to the display
        props.setDisplay(display + props.value)

        // push value to the history
        props.setHistory(currHistory => [...currHistory, props.value]);
    };

    return (
        <Button classname={ props.classname }
                callback = { callBack }
                value = { props.value }
                key = { "num" + props.value } />
    );
};

export default NumBtn;