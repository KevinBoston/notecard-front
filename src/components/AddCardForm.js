import React from 'react';
import {withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {addCard} from '../actions/CardActions'
import SelectDeckForCard from './SelectDeckForCard'



class AddCardForm extends React.Component {

    state = {
        front: "",
        back: "",
        deck_id: 0
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
        debugger
        this.props.addCard(this.state)
        this.setState({
            front: "",
            back: "",
            deck_id: undefined
        })
        console.log("Submitted")
    }
    determineDisabled = () => {
        let disabled =  (this.state.front === "" || this.state.back === "" || this.state.front === this.state.back)
        return disabled
    }

    render() {
        return(
            <div className='AddCardForm'>
                <form onSubmit={this.handleSubmit}>
                    <h5>Add a Card:</h5>
                    <SelectDeckForCard decks={this.props.decks} handleChange={this.handleChange} /*value={this.state.deck_id}*/ />
                    <label>Front: </label>
                    <input type="text" name="front" onChange={this.handleChange} placeholder="Front of the card" value={this.state.front} /><br />
                    <label>Back: </label>
                    <input type="text" name="back" onChange={this.handleChange} placeholder="Back of the card" value={this.state.back} /><br />
                    <input type="submit" disabled={this.determineDisabled()}/>
                </form>
            </div>
        )
    }

}
const mapStateToProps = state => {
    return {decks: state.decks}
}
export default withRouter(connect(mapStateToProps, {addCard})(AddCardForm));