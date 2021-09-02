import React from 'react'

class SelectDeckForCard extends React.Component {
    

    generateOptions() {
        const decks = this.props.decks
        const names = []
        for (let i = 0; i < decks.length; i ++) {
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
                {this.generateOptions()} <br />
            </>
        )
    }
}

export default SelectDeckForCard