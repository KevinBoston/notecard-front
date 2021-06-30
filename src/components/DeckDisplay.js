import React from 'react'


const DeckDisplay = (props) => {
    console.log(props)
   
        return(
            <div> 
                {props.deck.name} <br />
                {props.deck.description} <br />
                Public: { props.deck.public ? "True" : "False"} <br />
            </div>
        )






}

export default DeckDisplay