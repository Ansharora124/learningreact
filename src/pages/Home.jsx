import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const Home = () => {
    const { data, isLoading, error,refetch } = useQuery({
        queryKey: ["fact"],
        queryFn: async () => {
            const res = await axios.get("https://catfact.ninja/fact");
            return res.data;
        },
    });

    return (
        <div>
            <h1>this is home</h1>
           <p>{data?.fact}</p> <button onClick={refetch}>update data</button>

        </div>
    );
};
