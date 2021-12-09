// TODO: Figure out how to implement the operation buttons and how evaluations are going to occur

// Why is this running on page load?
export function evaluate (op1, operand, operator) {

    console.log("op1=" + op1);
    console.log("operand=" + operand);
    console.log("operator=" + operator);

    // cast operand to be a number
    operand = Number(operand);

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

// props.operation(props.operator1, props.operand, props.operator, props.setOperand1, props.setOperand2, props.result, props.setResult, props.setOperator);

// TODO: Code is no longer crashing, but nothing really happens when clicking on the operation button.
// TODO: Need to set it up so that the next time a number is pressed after pressing on an operation, the display clears and it starts from the second number
//  - This can be done as building the string that will be displayed in the history section of the calculator
export function add (op1, operand, currOperator, setOperand1, setOperand2, result, setResult, setCurrOperator) {

    // Parameter check
    console.log("Lift Check (Start):");
    console.log("op1: " + op1);
    console.log("operand: " + operand);
    console.log("currOperator: " + currOperator);

    let currResult = result;

    // If not the first operator
    if (currOperator !== 0) {
        
        // Store the results of the previous operation in the first operand
        currResult = evaluate(op1, Number(operand), currOperator);
        // setResult(result);
        setOperand1(result);

        // Reset the second operand
        setOperand2(0);

    // First operation being used
    } else {

        // Set state for the first operand
        setOperand1(Number(operand));
    }

    // Sets the current operator to "add" operation
    setCurrOperator("+");

    return currResult;
}