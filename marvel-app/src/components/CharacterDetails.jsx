import React, { useState } from "react";
import md5 from "md5";
import axios from "axios";

function CharacterDetails() {
    const [id, setId] = useState("");
    const [character, setCharacter] = useState(null);
    const publicKey = "77ee9dadc9b8682ede7a721b01b0e340";
    const privateKey = "f0656f0f447298da959749d01e22c3706218942d";
    const ts = new Date().getTime();
    const hash = md5(ts + privateKey + publicKey);

    const characterId = (e) => {
        setId(e.target.value);
    };

    const characterDetail = async (e) => {
        e.preventDefault();
        const response = await axios.get(
            `https://gateway.marvel.com/v1/public/characters/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`
        );
        console.log(response.data.data.results[0]);
        setCharacter(response.data.data.results[0]);
    };

    return (
        <div>
            <form onSubmit={characterDetail}>
                <input value={id} onChange={characterId} />
                <button type="submit">Search</button>
            </form>
            {character && (
                <div>
                    <h2>{character.name}</h2>
                    <a href={character.urls[0].url} target="_blank">
                        Comic Link
                    </a>
                    <ul>
                        {character.comics.items.map((comic, index) => (
                            <li key={index}>{comic.name}</li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
}

export default CharacterDetails;
