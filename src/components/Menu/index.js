import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/pokeballs.svg';
import './style.css';

export default function Menu() {
    const dispatch = useDispatch();
    
    function cleanStoreSearch() {
        dispatch({ type: 'SEARCH_POKEMON', data: {}});
    }

    return (
        <header className="page-header">
            <div className="header-content" data-testid="menu">
                <Link onClick={cleanStoreSearch} to="/" className="study">Inicio</Link>
                <img src={logo} alt="Pokédex"/>
                <Link onClick={cleanStoreSearch} to="pokeball" className="study">Pokebola</Link>
            </div>
        </header>
    );
}