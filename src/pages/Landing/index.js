import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../../components/Menu';
import MessageState from '../../components/MessageState';
import Search from '../../components/Search';

import logo from '../../assets/img/gaming.svg';

export default function Landing() {
    const pokemon = useSelector(state => state.data);

    return (
        <>
      
            <Menu />
            <Search />
            {Object.keys(pokemon).length === 0 && 
                <MessageState
                    logo={logo}
                    message={'Sua busca está vazia, para visualizar os pokemons preencha o campo acima.'}
                />
            }
            <div>{pokemon.name}</div>
        </>
    );
}
