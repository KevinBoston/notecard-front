import { react } from "react-dom"

export const getDecks = () => {
    const deck_url = "http://localhost:3000/decks"
    const decks = [
            {
             name: "Math",
             description: "Learn basic math!",
             cards: [{front: "1 + 1", back: "2"}, {front: "11-2", back: "9"}],
             public: true
            },
            {
             name: "Game of Thrones",
             description: "Learn basics about Game of Thrones characters (SPOILERS)",
             cards: [{front: "Knows nothing", back: "Jon Snow"}, {front:"Known as 'The Conciliator'", back: "Jaehareys I"}],
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

