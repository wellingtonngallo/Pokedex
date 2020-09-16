import React from 'react';
import { useSelector } from 'react-redux';
import MessageState from '../../components/MessageState';
import Search from '../../components/Search';
import Card from '../../components/Card';
import Menu from '../../components/Menu';
import logo from '../../assets/img/emptySearch.svg';

export default function Landing() {
    const pokemon = useSelector(state => state.data);

    function getContent() {
        if (Object.keys(pokemon).length === 0) {
            return (
                <MessageState
                    logo={logo}
                    message={'Sua busca está vazia, para visualizar os pokemons preencha o campo acima.'}
                />
            );
        }

        return (
            <div className="card-pokemon-content">
                <Card data={pokemon} />
            </div>
        );
    }

    return (
        <>
            <Menu/>
            <Search />
            {getContent()}
        </>
    );
}
