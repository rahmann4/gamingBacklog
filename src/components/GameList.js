import GameShow from "./GameShow";

function GameList ({games, onDelete, onEdit}) {
    const renderedGames = games.map((game) => {
        return <GameShow key={game.id} game={game} onDelete={onDelete} onEdit={onEdit}/>;
    });

    return <div className="book-list">
        {renderedGames}
    </div>

};

export default GameList;