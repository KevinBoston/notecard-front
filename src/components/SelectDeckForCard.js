import React from 'react'

class SelectDeckForCard extends React.Component {
    

    generateOptions() {
        const decks = this.props.decks
        for (let i = 0; i < decks.length; i ++) {
            console.log("Adding: " + decks[i].name)
            return decks[i].name
        }

    }

    render() {
        console.log(this.props)

        debugger
        return(
            <>
                Add card to which deck?<br />
            </>
        )
    }
}

export default SelectDeckForCard