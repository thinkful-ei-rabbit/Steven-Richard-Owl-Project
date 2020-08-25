import React from 'react';
import logo from './logo.svg';
import './App.css';
import participants from './participants';

// function App(props) {
//   const people = props.participants.map((participant) => {
//     const alive = props.participants.filter((participant) => {
//       let active = [];
//       let inactive = [];
//       if(participant.inSession) {
//         active.push(participant);
//     } else {
//         inactive.push(participant);
//     };
//     return (
//       <div className='box'>
//         <span><p>{participant.name}</p></span>
//         <span><p>{participant.name}</p></span>
//         <span><p>{participant.name} is on Stage</p></span>
//       </div>
//   )
//   })
//   return ( <div>{people}</div> );
// };

function App(props) {
    let people = props.participants.filter((participant) => {
      let active = [];
      let inactive = [];
      if(participant.inSession) {
        let personActive = (
          <div className='box'>
            <span><p>{participant.name}</p></span>
            <span><p>{participant.name}</p></span>
            <span><p>{participant.name} is in Session</p></span>
          </div>
        )
        active.push(personActive);
    } else {
      let personInactive = (
        <div className='box'>
          <span><p>{participant.name}</p></span>
          <span><p>{participant.name}</p></span>
          <span><p>{participant.name} is outta Session</p></span>
        </div>
      )
        inactive.push(personInactive);
    };
    return(active+inactive)
  });
  console.log(people);
  return ( <div>{people}</div> );
};

export default App;
