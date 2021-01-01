import React, { useState } from 'react';
import Button from './Button'


function Notes({ notes, onDelete }) {


    return (
        <ul className="list-group list-group-flush">
            {notes.map((note, index) => <li key={index} className={`list-group-item d-flex justify-content-between p-2 mb-4 border align-items-center`}><div><span className='note'>{note.todo}</span>{new Date().toLocaleDateString()}</div> <Button onClick={() => onDelete(note.id)} /> </li>)

            }
        </ul>
    )
}

export default Notes;
