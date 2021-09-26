import React from 'react'
import AddCardForm from '../components/AddCardForm'
import AddDeckForm from '../components/AddDeckForm'
import DisplayAllCardsInDeck from '../components/DisplayAllCardsInDeck'


const TestDisplay = (props) => {

    return(
        <div className="TestContainer">
            <h3>Testing:</h3>
            <AddCardForm decks={props.decks}/>
            <AddDeckForm />
            <DisplayAllCardsInDeck decks={props.decks} />
        </div>
    )

}

export default TestDisplay;