import { useState } from 'react';
import './App.css';

function App() {
  let [color, changeColor] = useState("Red");
  let [disabled, setDisabled] = useState(false);
  let btnColor = color === "Red" ? "Blue" : "Red";
  return (
    <div>
      <button style={{backgroundColor: color}} disabled={disabled} onClick={e => changeColor(btnColor)}>Change to {btnColor}</button>
      <input type='checkbox' defaultChecked={disabled} onChange={()=>setDisabled(!disabled)}/>
    </div>
  );
}

export default App;
