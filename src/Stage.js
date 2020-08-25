import React from 'react';

function Stage(props) {
  let stagey = ` ${props.onStage}`
  return (
    <main className='App'>
      <div className="App-list">
      <img src={props.avatar} alt='Logo'/>
      {props.name}
      {stagey}
      </div>
    </main>
  )
}

export default Stage;