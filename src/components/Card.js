import React from 'react'

class Card extends React.Component {


    render() {
        return(
            <>
                <p>Front: {this.props.front}
                Back: {this.props.back}</p>
            </>
        )
    }
}

export default Card