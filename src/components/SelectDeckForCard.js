import React from 'react'

class SelectDeckForCard extends React.Component {
    state = {
        deck_id: null

    }
    /*
    handleChange = e => {
        console.log(e.target)
        console.log(e)
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    } */

    generateOptions() {
        console.log(this.props)
        //console.log(props)
        const decks = this.props.decks
        const names = []
        const tags = [<option value={null}>Please select a deck:</option>]
        for (let i = 0; i < decks.length; i ++) {
            //console.log(decks[i].id + " " + decks[i].name)
            names.push(decks[i].name)
            tags.push(<option onClick={(e) => this.props.handleChange(e)} name={`${decks[i].name}`} value={decks[i].id}>{decks[i].name}</option>)
        }
        return tags

    }

    render() {
        //console.log(this.props)

        //debugger
        return(
            <>
            <label>
                    Add card to which deck?<br />
                    <select name="deck_id" onChange={(e) => this.props.handleChange(e)} value={this.state.deck_id}>
                        {this.generateOptions()} <br />
                    </select><br />
                </label>
            </>
        )
    }
}

export default SelectDeckForCard