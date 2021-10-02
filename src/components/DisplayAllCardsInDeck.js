import React from 'react'

class DisplayAllCardsInDeck extends React.Component {
    
    displayCards(deck) {
        console.log(deck.cards)

    }

    render() {
        console.log(this.props.decks)
        return(
            <>
                {this.props.deck.forEach(deck => {
                    this.displayCards(deck)
                })}
                All Cards Incoming!
            </>
        )

    }
}

export default DisplayAllCardsInDeck