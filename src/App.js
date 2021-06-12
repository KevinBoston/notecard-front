import logo from './logo.svg';
import './App.css';
import React from 'react';
import {getDecks} from './actions/DeckActions'
import {connect} from 'react-redux';

class App extends React.Component {
  // componentWillMount() {
  //   console.log("before", this.state)
  //   debugger
  //   this.props.getDecks()
  //   console.log("after", this.state)
  //   debugger
  // }
  constructor(props) {
    super(props)
    this.props.getDecks();
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header> 
        <p>Welcome to Notecard!</p>
        <>{this.state.decks}</>
        {/* Pass this.state.decks to DeckContainer */}
      </div>
    ) 
  };
}

const mapStateToProps = state => {
  
  console.log(state)
  return {decks: state.decks}
}

export default connect(mapStateToProps, {getDecks})(App);
