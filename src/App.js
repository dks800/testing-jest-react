import { useState } from 'react';
import './App.css';

function App() {
  let [color, changeColor] = useState("Red");
  let btnColor = color === "Red" ? "Blue" : "Red";
  return (
    <div>
      <button style={{backgroundColor: color}} onClick={e => changeColor(btnColor)}>Change to {btnColor}</button>
    </div>
  );
}

export default App;
