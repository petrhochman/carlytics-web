import { useState } from 'react'
import InputForm from './components/InputForm'
import ResultTable from './components/ResultTable'
import './index.css'

const mockResults = [
  {
    id: 1,
    model: 'Škoda Octavia Combi',
    segment: 'C',
    purchasePrice: 460000,
    tco: 820000,
    monthlyCost: 13667,
    fuel: 'Diesel',
    note: 'Silný poměr prostor / provozní náklady',
  },
  {
    id: 2,
    model: 'Kia Ceed SW',
    segment: 'C',
    purchasePrice: 410000,
    tco: 790000,
    monthlyCost: 13167,
    fuel: 'Benzin',
    note: 'Levnější vstupní cena a rozumný servis',
  },
  {
    id: 3,
    model: 'Hyundai i30 Kombi',
    segment: 'C',
    purchasePrice: 395000,
    tco: 800000,
    monthlyCost: 13333,
    fuel: 'Benzin',
    note: 'Bezpečný mainstream pro MVP scénář',
  },
]

function App() {
  const [formData, setFormData] = useState({
    budget: '450000',
    ownershipYears: '5',
    annualMileage: '20000',
    fuelType: 'any',
    bodyType: 'wagon',
    stroller: 'yes',
  })

  const [results, setResults] = useState(mockResults)

  function handleChange(e) {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    setResults(mockResults)
    console.log('Odeslaný formulář:', formData)
  }

  return (
    <main className="page">
      <section className="hero">
        <span className="eyebrow">Carlytics MVP</span>
        <h1>Porovnej si reálnější náklady na auto, ne jen pořizovací cenu</h1>
        <p>
          Jednoduchá kalkulačka pro rodinný scénář: rozpočet, nájezd, délka držení
          a rychlé srovnání vybraných modelů.
        </p>
      </section>

      <InputForm
        formData={formData}
        onChange={handleChange}
        onSubmit={handleSubmit}
      />

      <ResultTable results={results} />
    </main>
  )
}

export default App