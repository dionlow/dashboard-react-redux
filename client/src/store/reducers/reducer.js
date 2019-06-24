import * as actionTypes from '../actions/actionTypes'

const initialState = {
    cards: undefined,
    error: false
}

const setCards = (state, action) => {
    const updatedState = {
        ...state,
        cards: action.cards
    }
    console.log(updatedState)
    return updatedState
}

const fetchCardsFailed = (state) => {
    return {
        ...state,
        error: true
    }
}

const reducer = (state=initialState, action) => {
    switch(action.type){
        case actionTypes.SET_CARDS: return setCards(state, action)
        case actionTypes.FETCH_CARDS_FAILED: return fetchCardsFailed(state)
        default: return state
    }
}

export default reducer