import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import NumBtn from './NumBtn';

const Main = () => {

    const [display, setDisplay] = useState("Sample Input");
    const [result, setResult] = useState(0);

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

    // Renders number buttons 1-9
    const numBtns = numbers.map( function(row) {
        let numValues = row.values;

        // Creates the numbered buttons within a row
        let rowNums = numValues.map((col) =>
            <div className="col" key={ "col" + col}>
                <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={col} display={display} setDisplay={setDisplay} />
            </div>
        )

        // Returns a single row of numbers
        return (
            <div className="row" key={ "row" + row.rowNum } style={{margin: '5px' }}>
                { rowNums }
            </div>
        ) 
    })
    

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
                                </div>
                                {/* Operation buttons */}
                                <div className="col-md-2" key="operationInputs">
                                    { /* Buttons for the operations */}
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