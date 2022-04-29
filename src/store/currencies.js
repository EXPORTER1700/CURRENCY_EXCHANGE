const defaultState = {
    currencies: []
}

const ADD_MANY_CURRENCIES = 'ADD_MANY_CURRENCIES';

export const currenciesReducer = (state = defaultState, action) => {
    switch (action.type) {
        case(ADD_MANY_CURRENCIES): return {...state, currencies: [...action.payload]}
        default: return state
    }
}

export const addManyCurrenciesAction = payload => ({type: ADD_MANY_CURRENCIES, payload})