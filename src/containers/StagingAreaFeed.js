import React from 'react';
import {Prompt} from '../components/Prompt';
import {Staff} from '../components/Staff';
import {UserKeys} from '../components/UserKeys';
import './Staging.css'

export function Staging(){
    const promptText = "this is a prompt"
    const staffText = "this is the staff image"
    const userKeyText = "this is the user input"
    return (
        <div className="stage-area"> 
            <Prompt promptText={promptText}/>
            <Staff staffText={staffText}/>
            <UserKeys userKeyText={userKeyText}/>
        </div>
    )
}

