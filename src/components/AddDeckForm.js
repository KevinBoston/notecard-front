import React from 'react-dom'
class AddDeckForm extends React.component {
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

        this.setState({
            name: "",
            public: true,
            description: ""
        })
    }

}
