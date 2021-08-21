import React, { useState } from 'react';
import CalculatorDisplay from './CalculatorDisplay';
import NumBtn from './NumBtn';

const Main = () => {

    const [display, setDisplay] = useState("Sample Input");
    const [result, setResult] = useState(0);

    return (
        <div className="card">
            <div className="card-body" >
                {/* Input/Result display */}
                <div className="row">
                    <div className="col">
                        <CalculatorDisplay label="Input" value={ display } />
                    </div>

                    <div className="col">
                        <CalculatorDisplay label="Result" value = { result } />
                    </div>
                </div>
                {/* Button Inputs */}
                <div className="row">
                    <div className="col">
                        <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={1} display={display} setDisplay={setDisplay} />
                    </div>
                    <div className="col">
                        <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={2} display={display} setDisplay={setDisplay} />
                    </div>
                    <div className="col">
                        <NumBtn classname="btn btn-secondary" style={{width: '100%'}} value={3} display={display} setDisplay={setDisplay} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;