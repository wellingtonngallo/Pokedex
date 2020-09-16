import React, {useState} from 'react';
import api from '../../services/api';
import { useDispatch } from 'react-redux';
import './style.css';
import { useToasts } from 'react-toast-notifications';

export default function Search() {
    const [pokemon, setPokemon] = useState('');
    const dispatch = useDispatch();
    const { addToast } = useToasts();
    
    function search(event) {
        event.preventDefault();

        if (!pokemon) {
            return;
        }

        api.get(`pokemon/${pokemon}`).then(response => {
            dispatch({ type: 'SEARCH_POKEMON', data: response.data});
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
                    type="text"
                    id="search"
                    placeholder="Buscar pokemon"
                    onChange={e => setPokemon(e.target.value)}
                />
                <button type="submit">
                    Buscar
                </button>
            </div>
        </form>
    );
}
