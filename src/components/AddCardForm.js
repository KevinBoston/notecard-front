import React from 'react';
import addCard from '../actions/CardActions'



class AddCardForm extends React.Component {

    state = {
        front: "",
        back: "",
        deck_id
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()
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