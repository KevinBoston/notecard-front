import React from 'react'
import Card from './Card.js'

class DisplayAllCardsInDeck extends React.Component {
    
    displayCards(deck) {
        console.log("Deck: " + deck.name)
        console.log(deck.cards)
        deck.cards.forEach(card => {
            <Card front={card.front} back={card.back} />
        })

    }

    render() {
        console.log(this.props.decks)
        return(
            <>
                {this.props.decks.forEach(deck => {
                    this.displayCards(deck)
                })}
                All Cards Incoming!
            </>
        )

    }
}

export default DisplayAllCardsInDeck