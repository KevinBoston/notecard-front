import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'


class AddCardForm extends React.component {

    state = {
        front: "",
        back: ""
    }
    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }
    handleSubmit = e => {
        e.preventDefault()

        this.setState({
            front: "",
            back: ""
        })
    }
    determineDisabled() {
        this.state.front === "" || this.state.back === ""
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
                    <input type="submit" disabled={this.determineDisabled}/>
                </form>
            </div>
        )
    }

}

export default AddCardForm