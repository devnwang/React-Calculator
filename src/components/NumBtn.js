import React from 'react';
import Button from './Button';

const NumBtn = (props) => {

    const callBack = () => {

        console.log("start of num callback");
        console.log("buffer:" + props.buffer);

        // Previous input was the evaluate function
        if (props.buffer.at(-1) === "=") {
            console.log("buffer cleared");
            props.setBuffer([]);
            props.setDisplay('');
        }

        let inputStr;

        // Current input is not the first operand
        if (props.operator !== 0) {
            inputStr = props.operand2 === undefined ? props.value : props.operand2 + props.value;
            props.setOperand2(inputStr);
            console.log("operand2: " + inputStr);
        } else {
            inputStr = props.operand1 === undefined ? props.value : props.operand1 + props.value;
            props.setOperand1(inputStr);
            console.log("operand1: " + inputStr);
        }

        // adds the value to the display
        props.setDisplay(props.display + props.value)

        // push value to the Buffer
        props.setBuffer(currBuffer => [...currBuffer, props.value]);
    };

    return (
        <Button classname={ props.classname }
                callback = { callBack }
                value = { props.value }
                key = { "num" + props.value } />
    );
};

export default NumBtn;