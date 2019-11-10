import React, {useState} from 'react';
import { Piano as ReactPiano, KeyboardShortcuts } from 'react-piano';
import Soundfont from 'soundfont-player';
import 'react-piano/dist/styles.css';

export function Piano(props) {
  const { type, firstNote, lastNote } = props;
  const [piano, setPiano] = useState(null);
  const keyboardShortcuts = KeyboardShortcuts.create({
    firstNote: firstNote,
    lastNote: lastNote,
    keyboardConfig: KeyboardShortcuts.HOME_ROW,
  });

  Soundfont.instrument(new AudioContext(), type).then(p => setPiano(p));

  const pianoEl = !piano ? null :
    (
      <ReactPiano
        noteRange={{ first: firstNote, last: lastNote }}
        playNote={(midiNumber) => {
          piano.play(midiNumber)
        }}
        stopNote={(midiNumber) => {
          // Stop playing a given note - see notes below
          piano.stop(midiNumber)
        }}
        keyWidthToHeight={.30}
        width={650}
        keyboardShortcuts={keyboardShortcuts}
      />
    ) ;
  return (
    pianoEl
  )
}