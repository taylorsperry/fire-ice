import React, { Component } from 'react'
import { Card } from '../../components/Card/Card'
import { connect } from 'react-redux'
import wolf from '../../assets/wolf.gif'


export class CardContainer extends Component {
  constructor() {
    super();
    this.state={
      dummy: 'dummy'
    }
  }

  render() {
  
    let allHouses = this.props.houses.map(house => <Card {...house} />)  
    let image 

    if (this.props.loading) {
      image = <img src={wolf} alt="Wolf"/>
    }
    
    return (
      <div className='Container'>
        {image}
        {allHouses}
      </div>
    )
  }
}

export const mapStateToProps = (state) => ({
  loading: state.loading
})

export default connect(mapStateToProps)(CardContainer) 