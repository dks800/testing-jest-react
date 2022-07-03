import { useState } from 'react';
import './App.css';

export const replaceCamelcaseWithSpace = (colorName) => {
  return colorName.replace(/\B([A-Z])\B/g, ' $1');
}

function App() {
  let [color, changeColor] = useState("Red");
  let [disabled, setDisabled] = useState(false);
  let btnColor = color === "Red" ? "Blue" : "Red";
  return (
    <div>
      <button style={{backgroundColor: disabled ? 'grey' : color}} disabled={disabled} onClick={e => changeColor(btnColor)}>Change to {btnColor}</button>
      <input type='checkbox' defaultChecked={disabled} onChange={()=>setDisabled(!disabled)} id="cbx-disable-button"/>
      <label htmlFor='cbx-disable-button'>Disable button</label>
    </div>
  );
}

export default App;
