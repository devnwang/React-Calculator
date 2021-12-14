
export function evaluate (op1, op2, operator, setCurrOperator) {

    console.log("executing evaluate function");

    console.log("op1=" + op1);
    console.log("op2=" + op2);
    console.log("operator=" + operator);

    // cast operand to be a number
    op1 = Number(op1);
    op2 = Number(op2);

    setCurrOperator(0);

    // Switch statement to perform the operation
    switch(operator) {
        case "+":
            return op1 + op2;
        case "-":
            return op1 - op2;
        case "*":
            return op1 * op2;
        case "/":
            return op1 / op2;
        default:
            console.warn("WARNING: Unrecognized Operation");
            break;
    };
}


// props.operation(props.operand1, props.operand, props.operator, props.setOperand1, props.result, props.setResult, props.setOperator);

export function add (op1, op2, currOperator, setCurrOperator, setOperand1, setOperand2, result, setResult) {

    console.log("executing add function");

    // Parameter check
    console.log("op1: " + op1);
    console.log("op2: " + op2);
    console.log("currOperator: " + currOperator);

    let currResult = result;

    // If not the first operand
    if (currOperator !== 0) {
        
        // Store the results of the previous operation in the first operand
        currResult = evaluate(op1, op2, currOperator, setCurrOperator);
        // setResult(result);
        setOperand1(currResult);
        setOperand2('');

    // First operand
    } else {

        console.log("setting first operand to " + op1);

        // Set state for the first operand
        setOperand1(op1);
    }

    // Sets the current operator to "add" operation
    setCurrOperator("+");

    return currResult;
}

export function clearValues(setOperand1, setOperand2, setOperator, setResult, setDisplay, setBuffer) {
    setOperand1('');
    setOperand2('');
    setOperator(0);
    setResult(0);
    setDisplay('');
    setBuffer([]);
}