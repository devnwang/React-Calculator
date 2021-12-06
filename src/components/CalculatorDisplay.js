import React from 'react';

const CalculatorDisplay = (props) => {
    return (
        <div className="input-group mb-3" key={props.propsKey}>
            <span className = "input-group-text" key={ "span" + props.propsKey }>{ props.label }</span>
            <input type="text"
                   className="form-control"
                   key = { "inp" + props.propsKey }
                   value = { props.value }
                   readOnly />
        </div>
    );
};

export default CalculatorDisplay;