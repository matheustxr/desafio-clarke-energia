import { resolvers } from './resolvers';
import { describe, test, expect } from '@jest/globals';


describe('Energy Savings Logic', () => {
  
  test('Deve calcular economia corretamente para SP com alto consumo', () => {
    const result = resolvers.Query.calculateSavings({}, { consumo: 12000, uf: 'SP' });

    expect(result.baseTariff).toBe(0.95);
    expect(result.baseCost).toBe(12000 * 0.95);
    
    expect(result.savings).toHaveLength(2);
    
    const ecoPower = result.savings.find(s => s.supplier.name === 'EcoPower Energia');
    expect(ecoPower).toBeDefined();
    if (ecoPower) {
        const expectedCost = 12000 * 0.80;
        const expectedSavings = (12000 * 0.95) - expectedCost;
        expect(ecoPower.totalCost).toBeCloseTo(expectedCost);
        expect(ecoPower.monthlySavings).toBeCloseTo(expectedSavings);
    }
  });

  test('Deve filtrar fornecedores com consumo mínimo não atingido', () => {
    const result = resolvers.Query.calculateSavings({}, { consumo: 3000, uf: 'SP' });

    expect(result.savings).toHaveLength(1);
    expect(result.savings[0].supplier.name).toBe('EcoPower Energia');
  });

  test('Deve retornar erro se o estado não for atendido', () => {
    expect(() => {
      resolvers.Query.calculateSavings({}, { consumo: 1000, uf: 'AC' });
    }).toThrow('Estado AC não atendido ou inválido.');
  });
  
  test('Deve retornar lista vazia se nenhum fornecedor atender os requisitos', () => {
     const result = resolvers.Query.calculateSavings({}, { consumo: 100, uf: 'SP' });
     expect(result.savings).toHaveLength(0);
  });   
});