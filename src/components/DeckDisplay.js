import React from 'react'


const DeckDisplay = (props) => {
    console.log(props)
   
        return(
            <div> 
                {props.deck.name}
                {this.props.deck.description}
                Public: {this.props.deck.public}
            </div>
        )






}

export default DeckDisplay