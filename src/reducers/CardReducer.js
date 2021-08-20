function CardReducer(state = { decks: [], user: {username: undefined}}, action){
    console.log(action)
    switch (action.type) {
        case 'ADD_CARD':
            console.log(action.payload)
            //action.payload = {front:, back:, deck_id:}
            let currentDeck = state.decks.filter(deck => deck.id === action.payload.deck_id);
            currentDeck.push({front: action.payload.front, back: action.payload.back, deck_id: action.payload.deck_id})
            return {...state, decks: [...state.decks, currentDeck]}
        default:
            return state

    }

}

export default CardReducer;