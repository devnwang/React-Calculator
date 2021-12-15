// Function that implemets the evalution of the expression
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

// Function that handles all the calculating operations since they follow the same procedure
export function operation (op1, op2, prevOperator, operator, setOperator, setOperand1, setOperand2, result) {

    console.log("executing the operation");

    // Parameter check
    console.log("op1: " + op1);
    console.log("op2: " + op2);
    console.log("prevOperator: " + prevOperator);

    let runningResult = result;

    // If not the first operand
    if (prevOperator !== 0) {
        
        // Store the results of the previous operation in the first operand
        runningResult = evaluate(op1, op2, prevOperator, setOperator);
        // setResult(result);
        setOperand1(runningResult);
        setOperand2('');

    // First operand
    } else {

        console.log("setting first operand to " + op1);

        // Set state for the first operand
        setOperand1(op1);
    }

    // Sets the current operator to "add" operation
    setOperator(operator);
    console.log("set operator to " + operator);

    return runningResult;
}

// Helper function used to reset the state hooks
export function clearValues(setOperand1, setOperand2, setOperator, setResult, setDisplay, setBuffer) {
    setOperand1('');
    setOperand2('');
    setOperator(0);
    setResult(0);
    setDisplay('');
    setBuffer([]);
}