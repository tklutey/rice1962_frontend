import React from 'react';

// h1 for now, need to pull in image later 
export function Staff(props) {
    const { staffText } = props
        return (
            <div>
                <h1>{staffText}</h1> 
            </div>
        )
    
    }