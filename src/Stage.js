import React from 'react';
import './Stage.css';

function Stage(props) {
  let stagey = ` ${props.onStage}`
  return (
    <main className='stage-box'>
      <div className='stage-person'>
      <img src={props.avatar} alt='stage-image'/>
      {props.name}
      {stagey}
      </div>
    </main>
  )
}

export default Stage;