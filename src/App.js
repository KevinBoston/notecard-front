import logo from './logo.svg';
import './App.css';
import React from 'react';
import {getDecks} from './actions/DeckActions'

class App extends React.Component {
  componentDidMount() {
      
    this.props.getDecks()
 }
  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header> 
        <p>Welcome to Notecard!</p>
      </div>
    ) 
  };
}

export default connect(mapStateToProps, {getDecks})(App);
