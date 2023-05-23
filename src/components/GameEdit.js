import { useState } from "react";

function GameEdit ({ game, onSubmit }) {

    const [title, setTitle] = useState(game.title);
    const handleChange = event => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onSubmit(game.id, title);

    }

    return <form className="book-edit" onSubmit={handleSubmit}>
        <label>Title</label>
        <input className="input" value={title} onChange={handleChange}></input>
        <button className="button is-primary">Save</button>
    </form>
};

export default GameEdit;