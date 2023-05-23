import { useState } from "react";

function GameCreate ({ onCreate }) {
    const [title, setTitle] = useState('');
    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle('');
    }

    return <div className="book-create">
        <h3>Add a game</h3>
        <form onSubmit={handleSubmit}>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button">Add</button>
        </form>
    </div>
};

export default GameCreate;