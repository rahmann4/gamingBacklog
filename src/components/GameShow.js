import { useState } from "react";
import GameEdit from './GameEdit';

function GameShow ({game, onDelete, onEdit}) {
    const [showEdit, setShowEdit] = useState(false);

    const handleDelete = () => {
        onDelete(game.id)
    };

    const handleEdit = () => {
        setShowEdit(!showEdit);
    };

    const handleSubmit = (id, title) => {
        onEdit(id, title);
        setShowEdit(false);
    };

    let content = <h2>{game.title}</h2>;
    if (showEdit) {
        content = <GameEdit game={game} onSubmit={handleSubmit}/>
    };
    
    return <div className="book-show">
        {content}

    <div className="actions">
        <button className="edit" onClick={handleEdit}/>
        <button className="delete" onClick={handleDelete}/>
    </div>
    </div>
};

export default GameShow;