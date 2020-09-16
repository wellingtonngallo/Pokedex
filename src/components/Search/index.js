import React, {useState} from 'react';
import api from '../../services/api';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import './style.css';

export default function Search() {
    const [pokemon, setPokemon] = useState('');
    const pokeball = useSelector(state => state.pokeball);
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    
    function verifyIfPokeballHasLength(data) {
        for (let i = 0; i < pokeball.length; i++) {
            if (pokeball[i].id === data.id) {
                return pokeball[i];
            }
        }

        return data;
    }

    function search(event) {
        event.preventDefault();
    
        if (!pokemon) {
            return;
        }

        api.get(`pokemon/${pokemon}`).then(response => {
            dispatch({ type: 'SEARCH_POKEMON', data: verifyIfPokeballHasLength(response.data)});
        }, error => {
            addToast('Este Pokemon não existe', {
                appearance: 'error',
                autoDismiss: true,
            });
        });
    }

    return (
        <form onSubmit={search}>
            <div className="input-block">
                <input
                    data-testid="search-input"
                    type="text"
                    id="search"
                    placeholder="Buscar pokemon"
                    onChange={e => setPokemon(e.target.value)}
                />
                <button type="submit" data-testid="button-submit">
                    Buscar
                </button>
            </div>
        </form>
    );
}
