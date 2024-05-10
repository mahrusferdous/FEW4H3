import { useState } from "react";
import "./App.css";
import CharacterList from "./components/CharacterList";
import CharacterDetails from "./components/CharacterDetails";

function App() {
    return (
        <div className="style">
            <CharacterDetails />
            <CharacterList />
        </div>
    );
}

export default App;
