import React from 'react'

class SelectDeckForCard extends React.Component {
    state = {
        value: null

    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    generateOptions() {
        const decks = this.props.decks
        const names = []
        const tags = []
        for (let i = 0; i < decks.length; i ++) {
            names.push(decks[i].name)
            tags.push(<option value={decks[i].id}>{decks[i].name}</option>)
        }
        return tags

    }

    render() {
        console.log(this.props)

        debugger
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