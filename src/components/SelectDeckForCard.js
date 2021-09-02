import React from 'react'

class SelectDeckForCard extends React.Component {
    

    generateOptions() {
        console.log(this.props.decks)
        const decks = this.props.decks
        const names = []
        for (let i = 0; i < decks.length; i ++) {
            console.log("Adding: " + decks[i].name)
            names.push(decks[i].name)
        }
        return names.join(',')

    }

    render() {
        console.log(this.props)

        debugger
        return(
            <>
                Add card to which deck?<br />
                {this.generateOptions()}
            </>
        )
    }
}

export default SelectDeckForCard