import React from 'react'

class Card extends React.Component {


    render() {
        return(
            <>
                <p>Front: {this.props.front}</p><br />
                <p>Back: {this.props.back}</p><br />
            </>
        )
    }
}

export default Card