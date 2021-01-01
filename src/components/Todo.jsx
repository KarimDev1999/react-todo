import React from 'react';
import Notes from './Notes';

function Todo({ handleChange, notes, onAdd, onDelete, currentInput, }) {
    const onSubmit = (e) => {
        e.preventDefault();
    }
    return (

        <div>

            <form onSubmit={onSubmit}>
                <div className="form-group mt-5">
                    <input value={currentInput} onChange={handleChange} className="form-control mr-3" type="text" placeholder="Введите заметку" />
                    <button type='submit' onClick={onAdd} className="btn btn-outline-secondary" id="button-addon2">Button</button>
                </div>
            </form>
            <Notes notes={notes} onDelete={onDelete} />
        </div>
    )
}

export default Todo
