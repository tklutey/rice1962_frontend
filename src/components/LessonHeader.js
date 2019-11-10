import React from 'react';
import './LessonHeader.css';

export function LessonHeader(props) {
  const { headerText } = props;
  return(
    <span className="lesson-header">
      <h1>{headerText}</h1>
    </span>
  )
}