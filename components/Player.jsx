import {useState} from "react";

export default function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);

    function handleEditClick() {
        // 이전 값을 변경 할 경우 함수를 반환하여 변경하는 것이 권고됨.
        // 이렇게 해야 항상 최신 state 값을 가지고 있음.
        setIsEditing(editing => !editing);
    }

    let playerName = <span className="player-name">{name}</span>;
    // let btnCaption = "Edit";

    if (isEditing) {
        playerName = <input type="text" value={name} required/>;
        // btnCaption = "Save";
    }

    return (
        <li>
            <span className="player">
                {playerName}
                <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleEditClick}>{isEditing ? "Save" : "Edit"}</button>
        </li>
    );
};