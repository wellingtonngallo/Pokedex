import React from 'react';

import logo from '../../assets/img/ball.svg';
import './style.css';

export default function Menu() {
    return (
        <header className="page-header">
            <div className="header-content" data-testid="menu">
                <img src={logo} alt="Pokédex"/>
            </div>
        </header>
    )
}