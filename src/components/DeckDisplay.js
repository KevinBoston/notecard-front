import React from 'react'
import Card from './Card'


const DeckDisplay = props => {
    console.log("Displaying Deck:")
    console.log(props)
    debugger
        const displayFirstCard = () => {
            
            if (!!props.deck.cards) {
                const firstCard = props.deck.cards[0]
                return <Card front={firstCard.front} back={firstCard.back} />
            } else {
                return <p>No cards yet! Add one!</p>
            }
        }
        return(
            <div> 
                {props.deck.name} <br />
                {props.deck.description} <br />
                Public: { props.deck.public ? "True" : "False"} <br />
                {displayFirstCard()}
            </div>
        )






}

export default DeckDisplay