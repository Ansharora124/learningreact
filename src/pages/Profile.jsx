
import { useContext } from "react";
import { Appcontext } from "../App";
import { ChangeProfile } from "../components/changeProfile";

export const Profile = () => {
    const { username, setUsername } = useContext(Appcontext);
    return (
        <div>
            <h1>this is profile of: {username}</h1>
            <ChangeProfile setUsername={setUsername} />
        </div>
    );
};