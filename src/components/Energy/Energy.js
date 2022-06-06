import React, { useState } from 'react'
import '../../styles/App.css';
import EnergyImage from '../../images/Energy.png'
import NotEnergyImage from '../../images/notEnergy.jpg'
import Lamp from './Lamp';

function Energy() {
  const [energyService, setEnergyService] = useState(true)

  const houseEnergy = () => {
    setEnergyService(!energyService)
  }

  return (

    <div className="App">
      <button
        className="btnEnergy"
        onClick={() => { houseEnergy() }}>
          <img className="energy"src={energyService? NotEnergyImage :EnergyImage}
          />
      </button>

      {energyService &&
        <Lamp />
      }
    </div>
  );
}

export default Energy;