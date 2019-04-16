import React, { Component } from 'react';
import logo from './logo.svg';
import CardContainer from '../../containers/CardContainer/CardContainer'
import './App.css';
import { connect } from 'react-redux'
import { fetchHouse } from '../../thunks/fetchHouse'

class App extends Component {
  constructor() {
    super();
    this.state={
      dummy: 'dummy'
    }
  }

  //component did mount call an action
  getHouses = () => {
    const url = 'http://localhost:3001/api/v1/houses'
    this.props.fetchHouse(url)
  }

  render() {
    return (
      <div className='App'>
        <div className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <h2>Welcome to Westeros</h2>
        </div>
        <div className='Display-info'>
        </div>
        <CardContainer />
        <button onClick={this.getHouses}>fetchHouse</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  houses: state.houses,
  loading: state.loading,
  error: state.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchHouse: (url) => dispatch(fetchHouse(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
