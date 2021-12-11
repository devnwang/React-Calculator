import React from 'react';
import Button from './Button';

const NumBtn = (props) => {

    const callBack = () => {

        // store the current input that is displayed
        let display = props.display;

        // previous element is a string (operation)
        if (typeof(props.buffer.at(-1)) === "string") {

            // clear the display so that the new operand is displayed
            // TODO: Don't clear the display until the evaluate operation is executed
            display = "";
            console.log("display cleared");

            // clear the buffer as well
            if (props.buffer.at(-1) === "=") {
                console.log("buffer cleared");
                props.setBuffer(currBuffer => []);
            }
        }

        // adds the value to the display
        props.setDisplay(display + props.value)

        // push value to the Buffer
        props.setBuffer(currBuffer => [...currBuffer, props.value]);

        console.log("Key pressed: " + props.value);
    };

    return (
        <Button classname={ props.classname }
                callback = { callBack }
                value = { props.value }
                key = { "num" + props.value } />
    );
};

export default NumBtn;