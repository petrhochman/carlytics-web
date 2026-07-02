function InputForm({ formData, onChange, onSubmit }) {
  return (
    <section className="card">
      <div className="section-head">
        <h2>Zadej svůj scénář</h2>
        <p>Jednoduché vstupy pro první orientační porovnání TCO.</p>
      </div>

      <form className="form-grid" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="budget">Rozpočet (Kč)</label>
          <input
            id="budget"
            name="budget"
            type="number"
            value={formData.budget}
            onChange={onChange}
            placeholder="Např. 450000"
          />
        </div>

        <div className="field">
          <label htmlFor="ownershipYears">Délka držení</label>
          <select
            id="ownershipYears"
            name="ownershipYears"
            value={formData.ownershipYears}
            onChange={onChange}
          >
            <option value="3">3 roky</option>
            <option value="5">5 let</option>
            <option value="7">7 let</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="annualMileage">Nájezd km/rok</label>
          <input
            id="annualMileage"
            name="annualMileage"
            type="number"
            value={formData.annualMileage}
            onChange={onChange}
            placeholder="Např. 20000"
          />
        </div>

        <div className="field">
          <label htmlFor="fuelType">Preferované palivo</label>
          <select
            id="fuelType"
            name="fuelType"
            value={formData.fuelType}
            onChange={onChange}
          >
            <option value="any">Neřeším</option>
            <option value="petrol">Benzin</option>
            <option value="diesel">Diesel</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="bodyType">Karoserie</label>
          <select
            id="bodyType"
            name="bodyType"
            value={formData.bodyType}
            onChange={onChange}
          >
            <option value="any">Neřeším</option>
            <option value="wagon">Kombi</option>
            <option value="suv">SUV</option>
          </select>
        </div>

        <div className="field">
          <label htmlFor="stroller">Kočár</label>
          <select
            id="stroller"
            name="stroller"
            value={formData.stroller}
            onChange={onChange}
          >
            <option value="yes">Ano</option>
            <option value="no">Ne</option>
          </select>
        </div>

        <div className="form-actions">
          <button type="submit">Spočítat porovnání</button>
        </div>
      </form>
    </section>
  )
}

export default InputForm