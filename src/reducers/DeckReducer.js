function DeckReducer(state = {decks: []}, action) {
    console.log(action)
    switch (action.type) {

        case 'GET_DECKS':
            return {...state, decks: action.payload.decks} 


        default:
            return state

    }
}

export default DeckReducer;