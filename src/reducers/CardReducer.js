function CardReducer(state = { decks: [], user: {username: undefined}}, action){
    console.log(action)
    switch (action.type) {
        case 'ADD_CARD':
            console.log(action.payload)
            //action.payload = {front:, back:, deck_id:}

        default:
            return state

    }

}

export default CardReducer;