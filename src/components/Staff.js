import React from 'react';

export function Staff(props) {
    const { staffText } = props
    return (
        <div>
            <h1>{staffText}</h1> 
        </div>
    )
}