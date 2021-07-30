import React from 'react'
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addDeck} from '../actions/DeckActions'

class AddDeckForm extends React.Component {
    state = {
        name: "",
        public: false,
        description: ""

    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        this.props.addDeck(this.state)
        this.props.history.push('/decks');
        this.setState({
            name: "",
            public: true,
            description: ""
        })
    }
    determineDisabled = () => {
        let disabled = (this.state.name === "" || this.state.description === "")
        return disabled;
    }

    render() {
        return(
            <div className='AddDeckForm'>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add a Deck:</h5>
                    <label>Name: </label>
                    <input type="text" name="name" onChange={this.handleChange} placeholder="Title for the deck..." value={this.state.name} /><br />
                    <label>Description: </label>
                    <input type="text" name="description" onChange={this.handleChange} placeholder="Description" value={this.state.description} /><br />
                    <label>Should the deck be public? </label>
                    <input type="radio" name="public" onChange={this.handleChange} value = {true} />True
                    <input type="radio" name="public" onChange={this.handleChange} value={false} />False
                    <input type="submit" disabled={this.determineDisabled}/>
                </form>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {decks: state.decks}
}
export default withRouter(connect(mapStateToProps, {addDeck})(AddDeckForm));