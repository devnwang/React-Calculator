import React from 'react';
import Button from './Button';

/*
    Operations:
        + : Addition
        - : Subtraction
        * : Multiplication
        / : Division
        = : Evaluation
        C : Clear
        
*/

const OperationBtn = (props) => {

    // Need a lambda function in order to implement a callback function on a button
    const callbackFunc = () => {

        props.setBuffer(currBuffer => [...currBuffer, props.value]);
        console.log("value " + props.value + " is added to the buffer");

        let results = props.operation(props.operand1, props.operand, props.operator, props.setOperator, props.setOperand1, props.result, props.setResult);

        props.setResult(results);
        console.log("results has been set to " + results);

        if (props.value === "=") {
            let buffer = (props.buffer + props.value).replaceAll(',', '');

            props.setHistory(currHistory => [...currHistory,
                <div key={ "h" + props.history.length }>
                    { buffer.toString() }
                    { results }
                </div>
            ]);

            console.log("history has been set")
        }

        console.log("key pressed: " + props.value);
    }

    return (
        <Button classname = { props.classname }
                callback = { callbackFunc }
                value = { props.value }
                key = { "op" + props.keyName } />
    );
};

export default OperationBtn;