import { useContext } from "react";
import { Appcontext } from "../App";

export const Home = () => {
    const { username } = useContext(Appcontext);

    return (
        <div>
            <h1>this is home</h1>
            {username && <p>Current user: {username}</p>}
        </div>
    );
};