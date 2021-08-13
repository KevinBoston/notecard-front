import { react } from "react-dom"

export const getDecks = () => {
    const deck_url = "http://localhost:3000/decks"
    const decks = [
            {
             name: "Math",
             description: "Learn basic math!",
             cards: [{front: "1 + 1", back: "2", deck_id: 0}, {front: "11-2", back: "9", deck_id: 0}],
             public: true
            },
            {
             name: "Game of Thrones",
             description: "Learn basics about Game of Thrones characters (SPOILERS)",
             cards: [{front: "Knows nothing", back: "Jon Snow", deck_id: 1}, {front:"Known as 'The Conciliator'", back: "Jaehareys I", deck_id: 1}],
             public: true
            }
        ]

    return (dispatch) => {
        dispatch({
            type: 'GET_DECKS',
            payload: decks
        })
    }
}

export const addDeck = (newDeck) => {
    //Make sure that newDeck comes back from back end
    //with deck_id, and empty card array
    console.log(newDeck);
    return (dispatch) => {
        dispatch({
            type: 'ADD_DECK',
            payload: newDeck
        })
    }

}