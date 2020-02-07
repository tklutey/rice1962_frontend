import React from 'react';

export function Prompt(props) {
    const { promptText } = props
    return (
        <div>
            <h1>{promptText}</h1>
        </div>
    )
}