import React from 'react';
import {Prompt} from '../components/Prompt';
import {Staff} from '../components/Staff';
import {Keys} from '../components/Keys';
import '../App.css'

export function Staging(){
    const promptText = "this is a prompt"
    const staffText = "this is the staff image"
    const keyText = "this is the user input"
    return (
        <div className="stage-area"> 
            <Prompt promptText={promptText}/>
            <Staff staffText={staffText}/>
            <Keys keyText={keyText}/>
        </div>
    )
}

