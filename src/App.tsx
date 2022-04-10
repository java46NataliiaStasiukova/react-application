import React from 'react';
import './App.css';
import Color from './components/Color';
import InputData from './components/InputData';
import Timer from './components/Timer';
import timeZones from './config/time-zones';
import colorNames from './config/color-names';

type ComponentsNames = "input-time" | "timer" | "input-color" | "color" 
function App() {
  const [timeZone, setTimeZone] = React.useState('Asia/Jerusalem');
  const [color, setColor] = React.useState('red');
  const[componentName, setComponentName] = React.useState<ComponentsNames>('timer');
  const mapComponents: Map<ComponentsNames, React.ReactNode> = new Map;
  mapComponents.set("input-color", <InputData data={colorNames} injectData={setColor}></InputData>)
  mapComponents.set("color", <Color color={color}></Color>);
  mapComponents.set("input-time", <InputData data={timeZones} injectData={setTimeZone}></InputData>)
  mapComponents.set("timer", <Timer timeZone={timeZone}></Timer>)
  return <div className="d-grid gap-2 col-6 mx-auto">
    {Array.from(mapComponents.keys()).map(k => <div className="row mt-2"><button type="button" className="btn btn-info btn-lg" onClick={() => setComponentName(k)}>{k}</button></div>)}
    {mapComponents.get(componentName)}
  </div>
}
export default App;


