import React from 'react';
import {NavLink} from 'react-router-dom';
import {connect} from 'react-redux'

class NavBar extends React.Component {

    render() {
        return(
            <div className="NavBar">
                <NavLink exact to='/' className="NavBarLink-home">
                    Home
                </NavLink>
                <NavLink to='/decks' className="NavBarLink-decks">
                    View all Decks
                </NavLink>
            </div>
        )
    }



}

export default NavBar;