import React from 'react';
import Button from './Button';
import { add } from './utils';

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

        props.setHistory(currHistory => [...currHistory, props.value]);
        console.log(props.history);
        console.log("operation was called")

        let results = props.operation(props.operand1, props.operand, props.operator, props.setOperand1, props.setOperand2, props.result, props.setResult, props.setOperator);

        props.setResult(results);
    }

    return (
        <Button classname = { props.classname }
                callback = { callbackFunc }
                value = { props.value }
                key = { "op" + props.keyName } />
    );
};

export default OperationBtn;