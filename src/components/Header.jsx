import React from 'react';
import { Link } from 'react-router-dom'

function Header() {
    return (
        <div>
            <nav className="navbar navbar-dark bg-dark">
                <div>
                    <Link to='/' className="navbar-brand" href="#">Todo</Link>
                    <Link to='/info' className="navbar-brand" href="#">Info</Link>
                </div>
            </nav>

        </div>
    )
}

export default Header
