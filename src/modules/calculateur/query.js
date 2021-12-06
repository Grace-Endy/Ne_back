// Imports
import { GraphQLInt, GraphQLList } from "graphql"

// App Imports
import CalculateurType from "./types"
import {
  getAll,
  getByUser,
  getLastItemByUser,
  get,
  getRelatedByDevisCategorie,
} from "./resolvers"

// Calculateurs All
export const calculateurs = {
  type: new GraphQLList(CalculateurType),
  resolve: getAll,
}

// Calculateurs by user
export const calculateursByUser = {
  type: new GraphQLList(CalculateurType),
  resolve: getByUser,
}

export const lastCalculateurItemsByUser = {
  type: new GraphQLList(CalculateurType),
  resolve: getLastItemByUser,
}
// Calculateurs Related by devis_categorie
export const calculateursRelatedByDevisCategorie = {
  type: new GraphQLList(CalculateurType),
  args: {
    devis_categorie: { type: GraphQLInt },
  },
  resolve: getRelatedByDevisCategorie,
}

// Calculateur By id
export const calculateur = {
  type: CalculateurType,
  args: {
    id: { type: GraphQLInt },
  },
  resolve: get,
}
