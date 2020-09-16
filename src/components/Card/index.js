import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useToasts } from 'react-toast-notifications';
import logo from '../../assets/img/pokeball.svg';
import './style.css';

export default function Card({data}) {
    const [loadImageComplete, setLoadImageComplete] = useState(false);

    const dispatch = useDispatch();
    const pokeball = useSelector(state => state.pokeball);
    const { addToast } = useToasts();
    
    function toggleActiveePokeball() {
        if (!data.activePokeball) {
            data.activePokeball = !data.activePokeball;
            dispatch({ type: 'ADD_POKEBALL', pokemon: data});

            addToast('Pokemon adicionado com sucesso', {
                appearance: 'success',
                autoDismiss: true,
            });

        } else {
            const newArray = pokeball.filter(item => {
                if (item. id === data.id) {
                    item.activePokeball = !data.activePokeball;
                }
    
                return item.id !== data.id;
            });

            addToast('Pokemon removido com sucesso', {
                appearance: 'success',
                autoDismiss: true,
            });

            return dispatch({ type: 'REMOVE_POKEBALL', pokemon: newArray});
        }
    }

    function getImage() {
        if (!loadImageComplete) {
            return logo;
        }

        return data.sprites.other.dream_world.front_default;
    }

    return (
        <div className="card-content">
            <div className="card-header">
                <p className="card-item">{data.name}</p>
                <img
                    src={getImage()}
                    alt="Pokemon logo"
                    onLoad={() => setLoadImageComplete(true)}
                    width={40}
                    data-testid="img-card"
                />
            </div>
            <div className="card-body">
                <p className="card-item">Hp: {data.stats[0].base_stat}</p>
                <p className="card-item">Ataque: {data.stats[1].base_stat}</p>
                <p className="card-item">Peso: {data.weight}</p>
                <p className="card-item">Defesa: {data.stats[2].base_stat}</p>     
                <p className="card-item">Tamanho: {data.height}</p>
                <p className="card-item">Velocidade: {data.stats[5].base_stat}</p>
                <p className="card-item">Tipo: {data.types[0].type.name}</p>
            </div>
            <div className="card-footer">
                <button onClick={() => toggleActiveePokeball()} data-testid="button-card">
                    {!data.activePokeball ? 'Capturar' : 'Devolver'}
                </button>
            </div>
        </div>
    );
}