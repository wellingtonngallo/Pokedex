import React from 'react';
import { useSelector } from 'react-redux';
import Menu from '../../components/Menu';
import Search from '../../components/Search';

export default function Landing() {
    const pokemon = useSelector(state => state.data);

    return (
        <>
            <Menu />
            <Search />
            <div>{pokemon.name}</div>
        </>
    );
}
