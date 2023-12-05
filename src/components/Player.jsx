import { useState } from "react";

useState;
export default function Player({ intialName, symbol }) {
  const [isEditable, setisEditable] = useState(false);
  const [playerName, setplayerName] = useState(intialName);
  let dynamicFeild = <span className="player-name">{playerName}</span>;
  function handleChange(event){
    console.log(event)
    setplayerName(event.target.value);
  }
  function changeEditibility() {
    setisEditable((editing)=> !editing);
  }
  if (isEditable) {
    dynamicFeild = <input type="text" required value={playerName} onChange={handleChange}></input>
  }
  return (
    <li>
      <span className="player">
        {dynamicFeild}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeEditibility}>{isEditable ? 'Save' : 'Edit'}</button>
    </li>
  );
}
