import React from 'react';

export function UserKeys(props) {
    const { userKeyText } = props
    return (
        <div>
            <h1>{userKeyText}</h1>
        </div>
    )
}