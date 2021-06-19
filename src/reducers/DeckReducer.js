function DeckReducer(state = {decks: []}, action) {
    console.log(action)
    switch (action.type) {

        case 'GET_DECKS':
            //console.log(action.payload, state)
            return {...state, decks: action.payload} 

        case 'ADD_DECK':
            return {...state, decks: [...state.decks, action.payload]}
        default:
            return state

    }
}

export default DeckReducer;