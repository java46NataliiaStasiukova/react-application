import React from 'react';

import './App.css';
import Timer from './components/Timer';
function App() {

  const tmp: any = [
   {timeZone: ''},
   {timeZone: 'Europe/Amsterdam'},
   {timeZone: 'australia/Sydney'},
   {timeZone: 'America/New_York'}
  ];
  return <div className ="container">
    <div className="row" style={{marginTop: "10vw"}}>
  <Timer/>
  <Timer interval={2000} timeZoneName={tmp[1]} zoneName={'Amsterdam'}/>
  </div><div className="row" style={{marginTop: "10vw"}}>
  <Timer interval={2000} timeZoneName={tmp[2]} zoneName={'Sydney'}/>
  <Timer interval={2000} timeZoneName={tmp[3]} zoneName={'New York'}/>
  </div></div>

}
export default App;
