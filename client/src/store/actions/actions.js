import * as actionTypes from './actionTypes'

export const setCards = (cards) => {
    console.log(cards)
    return {
        type: actionTypes.SET_CARDS, 
        cards: cards
    }
}

export const fetchCardsFailed = () => {
    return {
        type: actionTypes.FETCH_CARDS_FAILED
    }
}

export const initCards = ()  => {
    return dispatch => {        
         fetch('/API/listCards')
            .then(response => response.json())
            .then(json => dispatch(setCards(json)))
            .catch(error => dispatch(fetchCardsFailed()))        
    }
}