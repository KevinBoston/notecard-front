import React from 'react';
import {NavLink} from 'react-router-dom';


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
                <NavLink to='/decks/new' className="NavBarLink-decks-new">
                    Add a Deck
                </NavLink>
            </div>
        )
    }



}

export default NavBar;