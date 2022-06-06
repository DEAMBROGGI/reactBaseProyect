import React from 'react'
import Bulb from './Bulb'

export default class Lamp extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isTurnedOn : false,
    }
  }

  cambiarLight = () => {
    this.setState({
      isTurnedOn : !this.state.isTurnedOn,    
    })
  }

  render() {
    return (
    
      <div>
        <Bulb lampara={this.state.isTurnedOn} />
        <p className="title">The lamp is <b>{this.state.isTurnedOn ? 'on' : 'off'}</b></p>
        <button onClick={this.cambiarLight}>switch</button>
      </div>
     
    )
  }
}