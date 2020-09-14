import { createStore } from 'redux';

const INITIAL_STATE = {
    data: {}
};

function pokemon(state = INITIAL_STATE, action) {
    switch (action.type) {
        case 'SEARCH_POKEMON':
            return { state, data: action.data };
        default:
            return state;
    }
}

const store = createStore(pokemon);

export default store;