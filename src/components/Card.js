import React from 'react'

class Card extends React.Component {


    render() {
        return(
            <>
                Front: {this.props.front} <br />
                Back: {this.props.back}
            </>
        )
    }
}

export default Card