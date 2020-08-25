import React from 'react';

function People(props) {
  return (
    <main className='App'>
      <div className="App-list">
      {props.name}
      <img src={props.avatar} alt='Logo'/>
      {props.inSession}
      </div>
    </main>
  )
}

export default People;