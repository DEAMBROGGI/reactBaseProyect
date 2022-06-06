import React, { useState } from 'react'
import './styles/App.css';
import Energy from './components/Energy/Energy';
import Clocks from './components/Clocks/Clocks';
import ApiCall from './components/Api/ApiCall';
import PassProps from './components/Derivedstate/PassProps';
import fondo from './images/Fondo.png'

function App() {
  const [action, setAction] = useState()

  return (
    <div className="imageApp" style={{backgroundImage:`url(${fondo})`, backgroundSize:"cover", height:"100vh", width:"100vw", overflow:'hidden', position:"relative"}}>
      <select onChange={(event) => { setAction(event.target.value) }} style={{fontSize:40, position:"absolute", top:"50px", left:"50px"}}>
       <option value="">No Options</option>
        <option value="clocks">Clocks</option>
        <option value="energy">Energy</option>
        <option value="api">Api</option>
        <option value="derived">PassProps</option>
      </select>

      <div className="App">
        {action === "clocks" && <Clocks />}
        {action === "energy" && <Energy />}
        {action === "api" && <ApiCall />}
        {action === "derived" && <PassProps />}
      </div>
    </div>
  );
}

export default App;
