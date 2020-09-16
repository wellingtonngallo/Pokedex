import { createStore } from 'redux';

const INITIAL_STATE = {
    data: {},
    pokeball: []
};

function pokemon(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEARCH_POKEMON':
            return { ...state, data: action.data };
        case 'ADD_POKEBALL':
            return {...state, pokeball: [...state.pokeball, action.pokemon ]};
        case 'REMOVE_POKEBALL':
            return {...state, pokeball: action.pokemon};
        default:
            return state;       
    }
}

export default createStore(pokemon);