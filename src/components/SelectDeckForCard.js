import React from 'react'

class SelectDeckForCard extends React.Component {
    

    generateOptions() {
        const decks = this.props.decks
        const names = []
        const tags = []
        for (let i = 0; i < decks.length; i ++) {
            names.push(decks[i].name)
            tags.push(<select value={decks[i].id}>{decks[i].name}</select>)
        }
        return tags

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