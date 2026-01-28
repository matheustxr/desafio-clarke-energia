import { useState } from 'react';
import { useLazyQuery } from '@apollo/client/react';
import { GET_SAVINGS } from './graphql/queries';
import './App.css';


interface SupplierSavings {
  monthlySavings: number;
  totalCost: number;
  supplier: {
    name: string;
    logo: string;
    state: string;
    costPerKwh: number;
    minKwh: number;
    rating: number;
    type: string;
  };
}

interface SimulationData {
  calculateSavings: {
    baseCost: number;
    baseTariff: number;
    savings: SupplierSavings[];
  };
}

function App() {
  const [consumo, setConsumo] = useState<number | ''>('');
  const [uf, setUf] = useState('SP');

  const [getSavings, { loading, error, data }] = useLazyQuery<SimulationData>(GET_SAVINGS);

  const handleSimulate = (e: React.SubmitEvent) => {
    e.preventDefault();
    if (consumo) {
      getSavings({ variables: { consumo: Number(consumo), uf } });
    }
  };

  return (
    <div className="app-container">
      <header>
        <h1>⚡ Clarke Energia</h1>
        <p>Simule sua economia de energia</p>
      </header>

      <main>
        <form onSubmit={handleSimulate} className="simulation-form">
          <div className="form-group">
            <label>Consumo Mensal (kWh)</label>
            <input
              type="number"
              placeholder="Ex: 3000"
              value={consumo}
              onChange={(e) => setConsumo(Number(e.target.value))}
              required
            />
          </div>

          <div className="form-group">
            <label>Estado (UF)</label>
            <select value={uf} onChange={(e) => setUf(e.target.value)}>
              <option value="SP">São Paulo (SP)</option>
              <option value="RJ">Rio de Janeiro (RJ)</option>
              <option value="MG">Minas Gerais (MG)</option>
            </select>
          </div>

          <button type="submit" disabled={loading}>
            {loading ? 'Calculando...' : 'Calcular Economia'}
          </button>
        </form>

        {error && <div className="error">Erro: {error.message}</div>}

        {data && (
          <div className="results">
            <h2>Resultados</h2>
            <p>Custo atual estimado: <strong>R$ {data.calculateSavings.baseCost.toFixed(2)}</strong></p>
            
            <div className="cards-grid">
              {data.calculateSavings.savings.length === 0 ? (
                <p>Nenhum fornecedor encontrado para este perfil.</p>
              ) : (
                data.calculateSavings.savings.map((item, index) => (
                  <div key={index} className="card">
                    <div className="card-header">
                      <img src={item.supplier.logo} alt={item.supplier.name} className="logo" />
                      <div>
                        <h3>{item.supplier.name}</h3>
                        <span className="badge">{item.supplier.type}</span>
                      </div>
                    </div>
                    <div className="card-body">
                      <p>Avaliação: ⭐ {item.supplier.rating}</p>
                      <p>Mínimo: {item.supplier.minKwh} kWh</p>
                      <hr />
                      <p className="savings-highlight">
                        Economia mensal: <br/>
                        <strong>R$ {item.monthlySavings.toFixed(2)}</strong>
                      </p>
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;