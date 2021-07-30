import React from 'react'
import Card from './Card'


const DeckDisplay = (props) => {
    console.log(props)
        const displayCards = () => {
            if (props.deck.cards) {
                <Card front={props.deck.cards[0].front} back={props.deck.cards[0].back} />
            }
        }
        return(
            <div> 
                {props.deck.name} <br />
                {props.deck.description} <br />
                Public: { props.deck.public ? "True" : "False"} <br />
                {displayCards()}
            </div>
        )






}

export default DeckDisplay