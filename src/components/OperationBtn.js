import React from 'react';
import Button from './Button';
import { clearValues } from './utils';

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

        // CLEAR button is pressed -> clears the current expression
        if (props.value === "CLEAR") {
            clearValues(props.setOperand1, props.setOperand2, props.setOperator, props.setResult, props.setDisplay, props.setBuffer);
        } else {

            // Adds the operation to the buffer in order to display the history
            props.setBuffer(currBuffer => [...currBuffer, props.value]);
            console.log("value " + props.value + " is added to the buffer");

            // the results of the current operation
            // export function evaluate (op1, op2, operator, setCurrOperator) {
            // export function add (op1, op2, currOperator, setCurrOperator, setOperand1, result, setResult) {
            let results = props.operation(props.operand1, props.operand2, props.operator, props.setOperator, props.setOperand1, props.setOperand2, props.result, props.setResult);

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