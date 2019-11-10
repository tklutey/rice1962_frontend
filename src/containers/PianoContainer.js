import React from 'react';
import {Piano} from "../components/Piano";
import { MidiNumbers } from 'react-piano'
import './PianoContainer.css';

export function PianoContainer() {
  const type = 'acoustic_grand_piano';
  const firstNote = MidiNumbers.fromNote('c3');
  const lastNote = MidiNumbers.fromNote('f4');

  return(
    <div className="piano-container">
      <Piano type={type} firstNote={firstNote} lastNote={lastNote}/>
    </div>
  )
}

