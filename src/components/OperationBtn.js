import React from 'react';
import Button from './Button';
import { operation, clearValues } from './utils';

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

        // CLEAR button is pressed -> clears the input and results display
        if (props.value === "CLEAR") {
            clearValues(props.setOperand1, props.setOperand2, props.setOperator, props.setResult, props.setDisplay, props.setBuffer);
        
        // Other operation button
        } else {

            // Adds the operation to the buffer in order to display the history
            props.setBuffer(currBuffer => [...currBuffer, props.value]);
            console.log("value " + props.value + " is added to the buffer");

            // the results of the current operation
            let results = operation(props.operand1, props.operand2, props.operator, props.value, props.setOperator, props.setOperand1, props.setOperand2, props.result);

            // update the results display
            props.setResult(results);
            console.log("results has been set to " + results);

            // set the display to show the operation as well
            props.setDisplay(props.display + props.value);

            // evaluating the expression
            if (props.value === "=") {
                // concatenate all values within the buffer
                let buffer = (props.buffer + props.value).replaceAll(',', '');

                // append the current expression to the history
                props.setHistory(currHistory => [...currHistory,

                    // history component
                    <div key={ "h" + props.history.length }>
                        {/* TODO: Make this into a card with the ability to remove the card if so wish */}
                        { buffer.toString() }
                        { results }
                    </div>
                ]);

                console.log("history has been set")
                clearValues(props.setOperand1, props.setOperand2, props.setOperator, props.setResult, props.setDisplay, props.setBuffer);
            }
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