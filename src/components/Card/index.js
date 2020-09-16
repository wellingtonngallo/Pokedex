import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import './style.css';

export default function Card({data}) {
    const dispatch = useDispatch();
    const pokeball = useSelector(state => state.pokeball);
    const { addToast } = useToasts();
    
    function toggleActiveePokeball() {
        if (!data.activePokeball) {
            data.activePokeball = !data.activePokeball
            dispatch({ type: 'ADD_POKEBALL', pokemon: data});

            addToast('Pokemon adicionado com sucesso', {
                appearance: 'success',
                autoDismiss: true,
            });

        } else {
            const newArray = pokeball.filter(item => {
                item.activePokeball = !data.activePokeball;

                return item.id !== data.id;
            });

            addToast('Pokemon removido com sucesso', {
                appearance: 'success',
                autoDismiss: true,
            });

            return dispatch({ type: 'REMOVE_POKEBALL', pokemon: newArray});
        }
    }

    return (
        <div className="card-content">
            <div className="card-header">
                <img src={data.sprites.front_default} alt="Pokemon logo"/>
                {data.name}
            </div>
            <div className="card-body">
                <p className="card-item">Hp: {data.stats[0].base_stat}</p>
                <p className="card-item">Ataque: {data.stats[1].base_stat}</p>
                <p className="card-item">Peso: {data.weight}</p>
                <p className="card-item">Defesa: {data.stats[2].base_stat}</p>     
                <p className="card-item">Tamanho: {data.height}</p>
                <p className="card-item">Velocidade: {data.stats[5].base_stat}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => toggleActiveePokeball()}>
                    {!data.activePokeball ? 'Capturar' : 'Devolver'}
                </button>
            </div>
        </div>
    );
}