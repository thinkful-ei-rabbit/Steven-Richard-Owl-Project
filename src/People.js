import React from 'react';

function People(props) {
  let sessy = ` ${props.inSession}`
  return (
    <main className='App'>
      <div className="App-list">
      {props.name}
      <img src={props.avatar} alt='Logo'/>
      {props.inSession}
      {sessy}
      </div>
    </main>
  )
}

export default People;