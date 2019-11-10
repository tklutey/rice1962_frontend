import React from 'react';
import {PianoContainer} from "./containers/PianoContainer";
import './App.css';
import { LessonHeader } from './components/LessonHeader'

function App() {
  const headerText = "Welcome to the lesson"
  return(
    <div className="lesson-container">
      <LessonHeader headerText={headerText}/>
      <PianoContainer/>
    </div>
  )
}

export default App;
