import React  from 'react'

function Bulb(props) {

const lampara = props.lampara

  return (
  <div>
      {lampara ?
        (<span>
          <img src={'https://cdn2.iconfinder.com/data/icons/flat-icons-19/512/Light_bulb.png'} alt="lampara apagada" width={50} />
        </span>) :
        (<span>
          <img src={'https://img.icons8.com/ios/1600/light-on.png'} alt="lamapara prendida"width={50} />
        </span>)}
  </div>
  )
   
}
export default Bulb;