import React from 'react'


const DeckDisplay = (props) => {
    console.log(props)
   
        return(
            <div> 
                {props.deck.name} <br />
                {props.deck.description} <br />
                Public: { props.deck.public ? "True" : "False"} <br />
                Front: {props.deck.cards[0].front}<br />
                Back: {props.deck.cards[0].back}<br />
            </div>
        )






}

export default DeckDisplay