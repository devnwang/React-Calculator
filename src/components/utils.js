
// FIXME: History/buffer doesn't reset after first execution of evaluate operation

// props.operation(props.operand1, props.operand, props.operator, props.setOperand1, props.result, props.setResult, props.setOperator);
export function evaluate (op1, operand, operator, setCurrOperator) {

    console.log("executing evaluate function");

    console.log("op1=" + op1);
    console.log("operand=" + operand);
    console.log("operator=" + operator);

    // cast operand to be a number
    operand = Number(operand);

    setCurrOperator(0);

    // Switch statement to perform the operation
    switch(operator) {
        case "+":
            console.log("typeof op1:" + typeof(op1));
            console.log("typeof operand:" + typeof(operand));
            return op1 + operand;
        case "-":
            return op1 - operand;
        case "*":
            return op1 * operand;
        case "/":
            return op1 / operand;
        default:
            console.warn("WARNING: Unrecognized Operation");
            break;
    };
}


// props.operation(props.operand1, props.operand, props.operator, props.setOperand1, props.result, props.setResult, props.setOperator);

export function add (op1, operand, currOperator, setCurrOperator, setOperand1, result, setResult) {

    console.log("executing add function");

    // Parameter check
    console.log("op1: " + op1);
    console.log("operand: " + operand);
    console.log("currOperator: " + currOperator);

    let currResult = result;

    // If not the first operand
    if (currOperator !== 0) {
        
        // Store the results of the previous operation in the first operand
        currResult = evaluate(op1, Number(operand), currOperator, setCurrOperator);
        // setResult(result);
        setOperand1(currResult);

    // First operand
    } else {

        console.log("setting first operand to " + operand);

        // Set state for the first operand
        setOperand1(Number(operand));
    }

    // Sets the current operator to "add" operation
    setCurrOperator("+");

    return currResult;
}