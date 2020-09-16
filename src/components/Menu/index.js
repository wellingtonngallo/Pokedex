import React from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/img/pokeball.svg';
import './style.css';

export default function Menu() {
    const dispatch = useDispatch();
    
    function cleanStoreSearch() {
        dispatch({ type: 'SEARCH_POKEMON', data: {}});
    }

    return (
        <header className="page-header">
            <div className="header-content">
                <Link 
                    data-testid="link-home"
                    onClick={cleanStoreSearch}
                    to="/"
                    className="study"
                >
                    Início
                </Link>
                <img data-testid="logo" src={logo} alt="Pokédex"/>
                <Link
                    data-testid="link-pokeball"
                    onClick={cleanStoreSearch}
                    to="pokeball"
                    className="study"
                >
                    Pokebola
                </Link>
            </div>
        </header>
    );
}