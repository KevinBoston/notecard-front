import React from 'react'
import AddCardForm from '../components/AddCardForm'
import AddDeckForm from '../components/AddDeckForm'


const TestDisplay = (props) => {

    return(
        <div className="TestContainer">
            <h3>Testing:</h3>
            <AddCardForm decks={props.decks}/>
            <AddDeckForm />
        </div>
    )

}

export default TestDisplay;