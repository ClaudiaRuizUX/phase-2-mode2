import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <nav className="flat">
                <Link to="/">Crypto</Link>
                <Link to="/finance"> | Finance</Link>
                <Link to="/regulation"> | Regulation</Link>
            </nav>

        </div>
     );
};

export default NavBar;