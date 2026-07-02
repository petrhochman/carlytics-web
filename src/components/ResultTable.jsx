function formatCurrency(value) {
  return new Intl.NumberFormat('cs-CZ', {
    style: 'currency',
    currency: 'CZK',
    maximumFractionDigits: 0,
  }).format(value)
}

function ResultTable({ results }) {
  return (
    <section className="card">
      <div className="section-head">
        <h2>Výsledky porovnání</h2>
        <p>První jednoduchý MVP výstup pro 3–5 modelů.</p>
      </div>

      <div className="table-wrap">
        <table className="results-table">
          <thead>
            <tr>
              <th>Model</th>
              <th>Segment</th>
              <th>Pořizovací cena</th>
              <th>TCO</th>
              <th>Měsíčně</th>
              <th>Palivo</th>
              <th>Poznámka</th>
            </tr>
          </thead>
          <tbody>
            {results.map((car) => (
              <tr key={car.id}>
                <td>{car.model}</td>
                <td>{car.segment}</td>
                <td>{formatCurrency(car.purchasePrice)}</td>
                <td>{formatCurrency(car.tco)}</td>
                <td>{formatCurrency(car.monthlyCost)}</td>
                <td>{car.fuel}</td>
                <td>{car.note}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default ResultTable