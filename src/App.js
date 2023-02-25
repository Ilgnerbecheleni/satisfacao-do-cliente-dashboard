import { useEffect, useState } from 'react'
import './App.css'
//import supabase from './client';
import { supabase } from './client'
import Bar from './Componemts/grafico'
import Card from './Componemts/Card'

function App () {
  const [bom, setBom] = useState(0)
  const [ruim, setRuim] = useState(0)
  const [otimo, setOtimo] = useState(0)

  async function lerDados () {
    try {
      const { data, error } = await supabase.from('satisfacao').select('*')
      if (error) throw error
      if (data != null) {
        console.log(data) // [product1,product2,product3]
        setBom(parseInt(data[0].bom))
        setRuim(data[0].ruim)
        setOtimo(data[0].otimo)
      }
    } catch (error) {
      alert(error.message)
    }
  }

  useEffect(() => {
    lerDados()
  }, [])

  return (
    <div className='grafico'>
      <h1>Satisfação do Cliente</h1>
      <div className='cardGraf'>
        <Bar bom={bom} otimo={otimo} ruim={ruim} />
      </div>

      <div>
        <Card bom={bom} otimo={otimo} ruim={ruim} atualiza={lerDados} />
      </div>
    </div>
  )
}

export default App
