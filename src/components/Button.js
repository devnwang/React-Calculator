import React from 'react';

export default function Button(props) {
    
    return (
        <button type="button"
                className={ props.classname }
                value = { props.value }
                onClick = { props.callback }
                style = {{width: "100%"}}>
            {props.value}
        </button>
    );
};