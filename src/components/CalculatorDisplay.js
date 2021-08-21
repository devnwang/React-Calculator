import React from 'react';

const CalculatorDisplay = (props) => {
    return (
        <div className="input-group mb-3">
            <span className = "input-group-text">{ props.label }</span>
            <input type="text"
                   className="form-control"
                   value = { props.value }
                   readOnly />
        </div>
    );
};

export default CalculatorDisplay;