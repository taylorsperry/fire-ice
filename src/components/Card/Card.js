import React, { Component } from 'react'

export class Card extends Component {
  
  render() {

    const {name, founded, seats, titles, coatOfArms, ancestralWeapons, words} = this.props
    return (
      <div className='Card'>
        <h3>{name}</h3>
        {founded}
        {seats}
        {titles}
        {coatOfArms}
        {ancestralWeapons}
        {words}
      </div>
    )
  }
  
}

export default Card