import logo from './logo.svg';
import './App.css';
import React from 'react';
import {getDecks} from './actions/DeckActions'
import {connect} from 'react-redux';
import DeckDisplay from './components/DeckDisplay';
import TestDisplay from './containers/TestDisplay';

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
  showDecks() {
    if (this.props.decks) {
      console.log("loading decks")
      let decks = this.props.decks;
      console.log(decks)
      return decks.map(deck => {
        console.log(deck)
        return <DeckDisplay deck={deck} />
      })
      
    } else {
      return <>Loading decks...</>
    }
    
  }

  render() {
    return(
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" /> 
        </header> 
        <p>Welcome to Notecard!</p>
        <>{this.showDecks()}</>
        <TestDisplay decks={this.props.decks}/>
      </div>
    ) 
  };
}

const mapStateToProps = state => {
  console.log(state)
  
  return {decks: state.decks}
}

export default connect(mapStateToProps, {getDecks})(App);
