import React from 'react'

function Button({ onClick }) {
    return (
        <button onClick={onClick} type="button" className="btn btn-outline-dark">&times;</button>
    )
}

export default Button
