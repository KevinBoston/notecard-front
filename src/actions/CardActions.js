import { react } from "react-dom"

export const addCard = (newCard) => {
    console.log(newCard)
    return (dispatch) => {
        dispatch({
            type: 'ADD_CARD',
            payload: newCard
        })
    }
}