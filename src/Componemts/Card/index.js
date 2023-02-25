import React from 'react'
import './card.css'
export default function Card({ruim , bom , otimo , atualiza}) {
  return (
    <div>
      <div className='card'>
      <p>Votações ruins : {ruim}</p>
      <p>Votações boas :  {bom}</p>
      <p>Votações ótimas : {otimo}</p>
      <button onClick={()=>{atualiza()}} className='atualiza'>Atualiza</button>
      </div>
    </div>
  )
}
