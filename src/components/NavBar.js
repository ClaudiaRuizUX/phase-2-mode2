import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    return (
        <div className="navbar">
            <NavLink to="/FinanceShowcase">Finance</NavLink>
            <NavLink to="/CryptoShowcase">Crypto</NavLink>
        </div>
    );
};

export default NavBar;