import './Player.css';
import cross from '../images/cross.png';
import { useState } from 'react';

function Player(props) {


    let [playerName, setPlayerName] = useState(props.name)
    let [isEditing, setIsEditing] = useState(false);

    function handleChange(event) {
        setPlayerName(event.target.value)
    }
    function handleClick() {
        if (isEditing === true) {
            setIsEditing(false);
        } else {
            setIsEditing(true)
        }
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;

    if (isEditing === true) {
        editablePlayerName = <input type='text' className='inputxt' required onChange={handleChange}></input>
    }

    return (
        <div className="player-container">
            {editablePlayerName}
            <span className='symbol'>{props.symbol} </span>
            <button className='edt-btn' onClick={handleClick}>{isEditing ? "SAVE" : "EDIT"}</button>
        </div>
    )
}
export default Player;

// if(age>18){
//     console.log("ad");
// }
// else{
//     console.log("teen");
// }
// {age>18?"Adult":"teen"}