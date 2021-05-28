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

}

export default AddCardForm