import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <nav id="plainNav" className="flat">
                <Link to="/">Top Business News</Link>
                <Link to="/finance">Finance</Link>
                <Link to="/realestate">Real Estate</Link>
            </nav>

        </div>
     );
};

export default NavBar;