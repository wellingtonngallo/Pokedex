import React, {useState} from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';

import './style.css';

function Search() {
    const [pokemon, setPokemon] = useState('');
    const dispatch = useDispatch();

    function search(event) {
        event.preventDefault();
        
        api.get(`pokemon/${pokemon}`).then(response => {
            debugger;
            dispatch({ type: 'SEARCH_POKEMON', data: response.data});
        });

    }

    return (
        <form onSubmit={search}>
            <div className="input-block">
                <input 
                    type="text"
                    id="search"
                    placeholder="Buscar pokemon"
                    onChange={e => setPokemon(e.target.value)}
                />
            </div>
            <button type="submit">
                Buscar
            </button>
        </form>
    )
}

export default Search;