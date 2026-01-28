import { ApolloServer, gql } from 'apollo-server';
import { resolvers } from './resolvers';

const typeDefs = gql`
  type Supplier {
    id: ID!
    name: String!
    logo: String!
    state: String!
    costPerKwh: Float!
    minKwh: Int!
    totalClients: Int!
    rating: Float!
    type: String!
  }

  type SupplierSavings {
    supplier: Supplier!
    monthlySavings: Float! 
    totalCost: Float!
  }

  type EnergySimulation {
    baseCost: Float!
    baseTariff: Float!
    savings: [SupplierSavings]!
  }

  type Query {
    calculateSavings(consumo: Float!, uf: String!): EnergySimulation
  }
`;

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});