import React from 'react'
import Card from './Card'


const DeckDisplay = (props) => {
    console.log(props)
   
        return(
            <div> 
                {props.deck.name} <br />
                {props.deck.description} <br />
                Public: { props.deck.public ? "True" : "False"} <br />
                <Card front={props.deck.cards[0].front} back={props.deck.cards[0].back} />
            </div>
        )






}

export default DeckDisplay