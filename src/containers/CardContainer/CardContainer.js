import React, { Component } from 'react'
import { Card } from '../../components/Card/Card'


export class CardContainer extends Component {
  constructor() {
    super();
    this.state={
      dummy: 'dummy'
    }
  }

  render() {
  
    let allHouses = this.props.houses.map(house => <Card {...house} />)    
    return (
      <div>
        {allHouses}
      </div>
    )
  }
}



export default CardContainer 