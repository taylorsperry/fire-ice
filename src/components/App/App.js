import React, { Component } from 'react';
import logo from './logo.svg';
import CardContainer from '../../containers/CardContainer/CardContainer'
import './App.css';
import { connect } from 'react-redux'
import { fetchHouse } from '../../thunks/fetchHouse'

export class App extends Component {

  componentDidMount() {
    this.getHouses()
  }
 
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
          <CardContainer houses={this.props.houses} />
        </div>
      </div>
    );
  }
}

export const mapStateToProps = (state) => ({
  houses: state.houses,
  loading: state.loading,
  error: state.error
})

export const mapDispatchToProps = (dispatch) => ({
  fetchHouse: (url) => dispatch(fetchHouse(url))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
