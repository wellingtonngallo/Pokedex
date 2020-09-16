import React from 'react';
import { useSelector } from 'react-redux';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import MessageState from '../../components/MessageState';

export default function Pokeball() {
    const pokeball = useSelector(state => state.pokeball);

    function getContent() {
        if (!pokeball.length) {
            return (
                <MessageState
                    message={'Sua busca pokebola está vazia, para adicionar um Pokemon clique no botão e faça uma busca.'}
                />
            )
        }

        return pokeball.map(item => <Card key={item.id} data={item} /> )
    }

    return (
        <>
            <Menu/>
            <div className="card-pokemon-content">
                {getContent()}
            </div>
        </>
    )
}