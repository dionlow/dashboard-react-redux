import React, {Component} from 'react'
import Dashboard from './components/Dashboard'
import * as actions from './store/actions/actions'
import {connect} from 'react-redux'

import './App.css';


// 1. Use React to create a dashboard.
// 2, Have to use react-redux.
// 3, Implement a node server and store data.
// 3, After user loaded the dashboard completely, fire an Ajax call to node server to get data. After you get response from your node server, render data as cards (For 	example the cards in bootstrap) in dashboard.
// 4, Users will have capability to add, delete, and search single card by title in dashboard.
// 5, When user click card, change background of card to gray.

class App extends Component {

  state = {
    data: undefined
  };

  componentDidMount() {
    this.props.initCards()
  }

  render() {
    let dashboard = undefined;
    if (this.props.cards) {
      console.log("Rendering Dashboard")
      dashboard = <Dashboard cards={this.props.cards}/>
    }
    return (
      <div className="App">       
        {dashboard}
      </div>
    );
  }
}


const mapStateToProps = state => {
  return {
    cards: state.cards
  }
}

const mapDispatchToProps = dispatch => {
  return {
    initCards: () => dispatch(actions.initCards()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
