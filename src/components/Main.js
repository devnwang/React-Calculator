import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import NumBtn from './NumBtn';
import OperationBtn from './OperationBtn';
import { evaluate, add } from './utils.js';

const Main = () => {

    const [display, setDisplay] = useState("");
    const [operand1, setOperand1] = useState(0);
    const [operand2, setOperand2] = useState(0);
    const [currOperand, setCurrOperand] = useState(0);
    const [operator, setOperator] = useState(0);
    const [result, setResult] = useState(0);

    // Majority of the numbers (rows 1-3)
    const numbers = [
        {
            rowNum: 1,
            values: [7, 8, 9]
        },
        {
            rowNum: 2,
            values: [4, 5, 6]
        },
        {
            rowNum: 3,
            values: [1, 2, 3]
        }
    ];

    // Renders number buttons 1-9 (rows 1-3)
    const numBtns = numbers.map( function(row) {
        let numValues = row.values;

        // Creates the numbered buttons within a row
        let rowNums = numValues.map((col) =>
            <div className="col" key={"numDiv" + col}>
                <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={col} display={display} setDisplay={setDisplay} />
            </div>
        )

        // Returns a single row of numbers
        return (
            <div className="row" key={"row" + row.rowNum } style={{margin: '5px' }}>
                { rowNums }
            </div>
        ) 
    })
    
    // Row 4 buttons
    const row4 = [
        { 
            value: 0,
            keyName: 0,
            colClass: "col-md-6"
        },
        { 
            value: '.',
            keyName: "Deci",
            colClass: "col-md-3"
        },
        {
            value: '=',
            keyName: "Eval",
            colClass: "col-md-3",
            operation: evaluate(operand1, currOperand)
        }
    ];

    const finalRowBtns = row4.map(function(item) {

        let obj;

        if ("operation" in item) {
            obj = <OperationBtn classname="btn btn-secondary" style={{width: '100%'}} value={item.value} />
        } else {
            obj = <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={item.value} display={display} setDisplay={setDisplay} />
        }

        return (
            <div className={ item.colClass } key={"btn" + item.keyName}>
                { obj }
            </div>
        )
    })

    const operators = [
        {
            operation: '+',
            keyName: "Add",
            callback: add
        },
        {
            operation: '-',
            keyName: "Subt"
        },
        {
            operation: '*',
            keyName: "Mult"
        },
        {
            operation: '/',
            keyName: "Div"
        }
    ];

    const operationBtns = operators.map((op) =>
        <div key={"div" + op.keyName} style={{margin: '5px'}}>
            <OperationBtn
                classname="btn btn-secondary"
                value={ op.operation }
                operation={ op.callback }
                operand1={ operand1 }
                operator={ operator }
                setOperand1={ setOperand1 }
                setOperand2={ setOperand2 }
                setResult={ setResult }
                setOperator={ setOperator } />
        </div>
    )

    return (
        <div className="container" key="app">
            <div className="row" key="appPos">
                {/* Main Calculator (buttons and display) */}
                <div className="col col-md-8" key="leftAppArea">
                    <div className="card" key="mainCalc">
                        <div className="card-body" key="mainBody" >
                            {/* Input/Result display */}
                            <div className="row" key="displayRow">
                                <div className="col" key="inputDisplayDiv">
                                    <CalculatorDisplay label="Input" value={ display } propsKey="inpDisplay" />
                                </div>

                                <div className="col" key="resultDisplayDiv">
                                    <CalculatorDisplay label="Result" value = { result } propsKey="resDisplay" />
                                </div>
                            </div>
                            {/* Button Inputs */}
                            {/* <div className="row">
                                <div className="col">
                                    <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={1} display={display} setDisplay={setDisplay} />
                                </div>
                                <div className="col">
                                    <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={2} display={display} setDisplay={setDisplay} />
                                </div>
                                <div className="col">
                                    <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={3} display={display} setDisplay={setDisplay} />
                                </div>
                            </div> */}
                            <div className="row" key="inputBtns">
                                {/* Number buttons */}
                                <div className="col-md-10" key="valueInputs">
                                    { numBtns }

                                    {/* Zero + some operations */}
                                    <div className="row" key="row4">
                                        {/* <div className="col" key="numDiv0">
                                            <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={0} display={display} setDisplay={setDisplay} />
                                        </div> */}
                                        { finalRowBtns }
                                    </div>
                                </div>
                                {/* Operation buttons */}
                                <div className="col-md-2" key="operationInputs">
                                    { /* Buttons for the operations */}
                                    { operationBtns }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Calculation History */}
                <div className="col-md-4" key="rightAppArea">
                    <div className="card" key="history">
                        <div className="card-header" key="historyHeader">
                            History
                        </div>
                        <div className="card-body" key="historyBody">
                            {/* History content */}
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Main;