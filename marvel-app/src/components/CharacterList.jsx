import React, { useState, useEffect } from "react";
import axios from "axios";
import md5 from "md5";

function CharacterList() {
    const [data, setData] = useState([]);
    const publicKey = "77ee9dadc9b8682ede7a721b01b0e340";
    const privateKey = "f0656f0f447298da959749d01e22c3706218942d";
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/characters?ts=${ts}&apikey=${publicKey}&hash=${hash}&limit=50`
            );
            console.log(response.data.data.results);
            setData(response.data.data.results);
        };
        fetchData();
    }, []);

    return (
        <div>
            <div>
                {data.map((data, index) => (
                    <div key={index}>
                        <p>
                            {data.id} {data.name}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default CharacterList;
