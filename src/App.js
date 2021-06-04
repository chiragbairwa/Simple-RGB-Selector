import { useState } from 'react'

export default function App() {
  let [red, setred] = useState(50)
  let [green, setgreen] = useState(50)
  let [blue, setblue] = useState(50)

  function changeColor() {
    red = setred(document.getElementById('red').value)
    green = setgreen(document.getElementById('green').value)
    blue = setblue(document.getElementById('blue').value)
  }
  document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`

  return (
    <div className="App">
      {/* Card */}
      <div style={{
        width: '200px',
        margin: '10px',
        textAlign: 'left',
        borderRadius:'5px',
        padding: '8px 10px',
        backgroundColor: 'white',
        boxShadow: '0 0 10px 0 rgba(0,0,0,0.5)',
      }}>
        <p>Red   :
            <input type="range" min="0" max="255" id="red" onChange={changeColor} /></p>
        <p>Green :
            <input type="range" min="0" max="255" id="green" onChange={changeColor} /></p>
        <p>Blue  :
            <input type="range" min="0" max="255" id="blue" onChange={changeColor} /></p>

        <p align="center">rgb({red}, {green}, {blue})</p>
      </div>
    </div>
  );
}