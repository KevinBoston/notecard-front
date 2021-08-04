import { react } from "react-dom"

export const addCard = (newCard) => {
    console.log(newCard)
    //Example: {front: "Foo", back: "Bar", deck_id: 3}
    return (dispatch) => {
        dispatch({
            type: 'ADD_CARD',
            payload: newCard
        })
    }
}