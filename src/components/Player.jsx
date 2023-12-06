import { useState } from "react";

export default function Player({ intialName, symbol, isActive, onNameChange}) {
  const [isEditable, setisEditable] = useState(false);
  const [playerName, setplayerName] = useState(intialName);
  let dynamicFeild = <span className="player-name">{playerName}</span>;

  function handleChange(event){
    console.log(event)
    setplayerName(event.target.value);
  }

  function changeEditibility() {
    setisEditable((editing)=> !editing);
    if(isEditable){
        onNameChange(symbol, playerName);
    }
  }

  if (isEditable) {
    dynamicFeild = <input type="text" required value={playerName} onChange={handleChange}></input>
  }

  return (
    <li className={isActive ? 'active':undefined}>
      <span className="player">
        {dynamicFeild}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={changeEditibility}>{isEditable ? 'Save' : 'Edit'}</button>
    </li>
  );
}
