import { gql } from '@apollo/client';

export const GET_SAVINGS = gql`
  query CalculateSavings($consumo: Float!, $uf: String!) {
    calculateSavings(consumo: $consumo, uf: $uf) {
      baseCost
      baseTariff
      savings {
        monthlySavings
        totalCost
        supplier {
          name
          logo
          state
          costPerKwh
          minKwh
          totalClients
          rating
          type
        }
      }
    }
  }
`;