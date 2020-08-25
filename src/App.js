import React from 'react';
import logo from './logo.svg';
import People from './People'
import Stage from './Stage'
import './App.css';


/* function App(props) {
  const alive = props.participants.forEach((participant) => {
     if (participant.inSession === true) {
       return participant;
     }
    });
    return (
      <div className='box'>
        <span><p>{alive}</p></span>
{        <span><p>{participant.name}</p></span>
        <span><p>{participant.name} is on Stage</p></span>}
      </div>
  )
} */


/* function App(props) {
    let people = props.participants.forEach((participant) => {
      let active = '';
      let inactive = '';
      if(participant.inSession) {
        active += 
          `<div className='box'>
            <span><p>${participant.avatar}</p></span>
            <span><p>${participant.name}</p></span>
            <span><p>${participant.name} is in Session</p></span>
          </div>`

        console.log(active)
    } else {
      inactive += (
        <div className='box'>
          <span><p>{participant.avatar}</p></span>
          <span><p>{participant.name}</p></span>
          <span><p>{participant.name} is outta Session</p></span>
        </div>
      )
    };

    return
  });
  return ( <div>{people}</div> );
}; */


/* function App(props) {
  let people2 = 
  let people = props.participants.forEach((participant) => {
    let active = [];
    let inactive = [];
    if (participant.inSession) {
      let personActive = `
        <div className='box'>
          <span><p>${participant.name}</p></span>
          <span><p>${participant.name}</p></span>
          <span><p>${participant.name} is in Session</p></span>
        </div>
      `
      active.push(personActive);
  } else if (!participant.inSession) {
    let personInactive = `
      <div className='box'>
        <span><p>${participant.name}</p></span>
        <span><p>${participant.name}</p></span>
        <span><p>${participant.name} is outta Session</p></span>
      </div>
    `
      inactive.push(personInactive);
  };
  let conCat = active.concat(inactive)
  let dotJoin = conCat.join();
  console.log(dotJoin)
  return dotJoin;
});
console.log(people);
return ( <div>{people}</div> );
}; */
/* 
function App(prop) {
  let success = [];
  let notSuccess = [];
    for (let i = 0; i < prop.participants.length; i++) {
      if (prop.participants[i].inSession === true) {
        success.push(prop.participants[i])
      } else {
        notSuccess.push(prop.participants[i]);
      }
    }
    
   console.log(customLis)  
  console.log(success)
  console.log(notSuccess)
  
  return (
    <main className='App'>
    <header className="App-header">
      <h1>Trelloyes!</h1>
    </header>
    <div className="App-list">
  <h1>{success[0].name}</h1>
    </div>
  </main>
  )
}; */

function App(prop) {
  const customLis = prop.participants.map(function({id, avatar, name, inSession}) {
    return <People key={id} name={name} avatar={avatar} inSession={inSession} />
  });
  const customLis2 = prop.participants.map(function({id, avatar, name, onStage}) {
    return <Stage key={id} name={name} avatar={avatar} onStage={onStage} />
  });
  /* console.log(customLis)  */
  console.log(customLis)
  return (
    <main className='main'>
      <div className="left">
      {customLis}
      </div>
      <div className="right">
      {customLis2}
      </div>
    </main>
  )
};


export default App;
