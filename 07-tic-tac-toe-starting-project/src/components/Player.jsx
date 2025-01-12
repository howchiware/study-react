import { useState } from 'react';

export default function Player({ initailName, symbol, isActive, onChangeName }) {
    const [playerName, setPalyerName] = useState(initailName);

    const [isEditing, setIsEditing] = useState(false);

    function handelEditClick() {
        // isEditing 값이 true라면 setIsEditing에 false를 보냄
        // setIsEditing(isEditing ? false : true);
        // setIsEditing(!isEditing);
        setIsEditing((editing) => !editing);
        
        if (isEditing) {
            onChangeName(symbol, playerName);
        }
    }

    function handleChange(event) {
        setPalyerName(event.target.value);
    }

    let editablePlayerName = <span className='player-name'>{playerName}</span>;
    //let btnCaption = 'Edit';

    if (isEditing) {
        editablePlayerName = <input type="text" required value={playerName} onChange={handleChange} />;
        //btnCaption = 'Save';
    }

    return (
        <li className={isActive ? 'active' : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className='player-symbol'>{symbol}</span>
            </span>
            <button onClick={handelEditClick}>{isEditing ? 'Save' : 'Edit'}</button>
        </li>
    );
}