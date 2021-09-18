import React from 'react'

class SelectDeckForCard extends React.Component {
    state = {
        value: null

    }
    handleChange = e => {
        console.log(e.target)
        console.log(e)
        debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    generateOptions() {
        const decks = this.props.decks
        const names = []
        const tags = [<option key={null}>Please select a deck:</option>]
        for (let i = 0; i < decks.length; i ++) {
            console.log(decks[i].id + " " + decks[i].name)
            names.push(decks[i].name)
            tags.push(<option onChange={this.handleChange} value={decks[i].id}>{decks[i].name}</option>)
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
                    <select value={this.state.value} onChange={this.handleChange}>
                        {this.generateOptions()} <br />
                    </select><br />
                </label>
            </>
        )
    }
}

export default SelectDeckForCard