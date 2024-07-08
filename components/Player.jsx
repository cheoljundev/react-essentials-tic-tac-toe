import {useState} from "react";

export default function Player({initialName, symbol, isActive}) {
    const [playerName, setPlayerName] = useState(initialName)
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // 이전 값을 변경 할 경우 함수를 반환하여 변경하는 것이 권고됨.
        // 이렇게 해야 항상 최신 state 값을 가지고 있음.
        setIsEditing(editing => !editing);
    }

    let editablePlayerName = <span className="player-name">{playerName}</span>;
    // let btnCaption = "Edit";

    function handleChange(event) {
        setPlayerName(event.target.value);
    }

    if (isEditing) {
        editablePlayerName = <input type="text" value={playerName} required onChange={handleChange}/>;
        // btnCaption = "Save";
    }

    return (
        <li className={isActive ? "active" : undefined}>
            <span className="player">
                {editablePlayerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};