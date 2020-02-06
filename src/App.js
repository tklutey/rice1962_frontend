import React from 'react';
import {PianoContainer} from "./containers/PianoContainer";
import './App.css';
import { LessonHeader } from './components/LessonHeader'
import {Staging} from './containers/StagingAreaFeed';

function App() {
  const headerText = "Welcome to the Lesson"
  return(
    <div className="lesson-container">
      <LessonHeader headerText={headerText}/>
      <Staging/>
      <PianoContainer/>
    </div>
  )
}

export default App;
