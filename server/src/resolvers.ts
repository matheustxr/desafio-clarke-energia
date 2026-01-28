import { SUPPLIERS, STATE_BASE_TARIFFS } from './db';

export const resolvers = {
  Query: {
    calculateSavings: (_: any, { consumo, uf }: { consumo: number, uf: string }) => {
      const tariff = STATE_BASE_TARIFFS[uf.toUpperCase()];
      
      if (!tariff) {
        throw new Error(`Estado ${uf} não atendido ou inválido.`);
      }

      const baseCost = consumo * tariff;

      const availableSuppliers = SUPPLIERS.filter(s => 
        s.state === uf.toUpperCase() && consumo >= s.minKwh
      );

      const savingsResults = availableSuppliers.map(supplier => {
        const supplierCost = consumo * supplier.costPerKwh;
        const saving = baseCost - supplierCost;

        return {
          supplier,
          totalCost: supplierCost,
          monthlySavings: saving > 0 ? saving : 0,
        };
      });

      return {
        baseCost,
        baseTariff: tariff,
        savings: savingsResults
      };
    },
  },
};