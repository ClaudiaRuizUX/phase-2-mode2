import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    return (
        // <div className="navbar blue">
        //     <NavLink to="/FinanceShowcase">Finance</NavLink>
        //     <NavLink to="/CryptoShowcase">Crypto</NavLink>
        //     <NavLink to="/RegulationShowcase">Regulation</NavLink>
        // </div>
        <nav>
            <Link to="/">Crypto</Link>
            <Link to="/Finance">Finance</Link>
            <Link to="/Regulation">Regulation</Link>
        </nav>
    );
};

export default NavBar;