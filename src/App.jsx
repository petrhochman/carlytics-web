import { useEffect, useState } from 'react'
import { supabase } from './lib/supabase'

function App() {
  const [status, setStatus] = useState('Testuji připojení...')

  useEffect(() => {
    async function testConnection() {
      const { data, error } = await supabase
        .from('dimCarModel')
        .select('BrandName, ModelName, SegmentName')
        .limit(3)

      if (error) {
        setStatus(`❌ Chyba: ${error.message}`)
      } else {
        setStatus(`✅ Připojeno! Načteno ${data.length} modelů.`)
        console.log(data)
      }
    }
    testConnection()
  }, [])

  return (
    <div style={{ padding: '2rem', fontFamily: 'sans-serif' }}>
      <h1>Carlytics – test připojení</h1>
      <p>{status}</p>
    </div>
  )
}

export default App