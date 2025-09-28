import { useState } from "react";

export const ChangeProfile = (props) => {
    const [newUsername, setNewUsername] = useState("");
    return (
        <div>
            <input
                value={newUsername}
                onChange={(event) => {
                    setNewUsername(event.target.value);
                }}
                placeholder="Enter new username"
            />
            <button onClick={() => props.setUsername(newUsername)}>
                change username
            </button>
        </div>
    );
};