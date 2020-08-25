import React from 'react';
import './People.css';

function People(props) {
  let sessy = ` ${props.inSession}`
  return (
    <main className='person-box'>
      <div className='person-name'>
      {props.name}
      <img src={props.avatar} alt='person-avatar'/>
      {props.inSession}
      {sessy}
      </div>
    </main>
  )
}

export default People;