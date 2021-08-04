function CardReducer(state = { decks: [], user: {username: undefined}}, action){
    console.log(action)
    switch (action.type) {
        case 'ADD_CARD':
            console.log(action.payload)

        default:
            return state

    }

}

export default CardReducer;