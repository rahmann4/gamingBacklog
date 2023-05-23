import { useState } from "react";
import GameCreate from "./components/GameCreate";
import GameList from"./components/GameList";


function App () {
    const [game, setGame] = useState([]);

    const handleEdit = (id, title) => {
        const updatedGames = game.map((game) => {
            if (game.id === id) {
                return {...game, title};
            }

            return game;
        });

        setGame(updatedGames);
    };

    const handleDelete = (id) => {
        const updatedGames = game.filter((game) => {
            return game.id !== id;
        });

        setGame(updatedGames);
    };

    const handleCreate = (title) => {
        const updatedGames = [
            ...game, { id: Math.round(Math.random() * 9999), title }
        ];

        setGame(updatedGames);
    }

    return <div className="app">
        <h1>Gaming Backlog</h1>
        <GameList games={game} onDelete={handleDelete} onEdit={handleEdit}/>
        <GameCreate onCreate={handleCreate} />
        </div>
};

export default App;